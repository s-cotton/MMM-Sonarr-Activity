/* global Log, Module, moment, config */
/* Magic Mirror
 * Module: MMM-Sonarr-Activity
 *
 * By Stephen Cotton
 * MIT Licensed.
 */

//var Module, Log, moment, config, Log, moment, document;

Module.register("MMM-Sonarr-Activity", {

     // Default module config.
    defaults: {
        sonarrProtocol: "http",
        sonarrHost: "localhost",
        sonarrPort: "8989",
        sonarrAPIKey: "",

        displayType: "list",
        perPage: 15,
        sliderDelay: 5000,

        updateInterval: 5 * 60 * 1000,

        debug: true,
    },

    // Subclass start method.
    start: function () {
        Log.info("Starting module: " + this.name);
        if (this.config.debug) Log.info(this.name + " config: ", this.config);

        this.sendSocketNotification('CONFIG', this.config);
        var self = this;
        
        self.getLatestActivity();

        this.updater = setInterval(function(){
            self.getLatestActivity();
        }, this.config.updateInterval );

    },

    getScripts: function() {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',
            this.file('bower_components/underscore/underscore-min.js'),
            this.file('bower_components/backbone/backbone-min.js'),
            this.file('bower_components/handlebars/handlebars.min.js'),
        ];
    },

    // Subclass socketNotificationReceived method.
    socketNotificationReceived: function (notification, payload) {
        if (this.config.debug) Log.info(this.name + " received a notification: " + notification, payload);

        var self = this;

        if (notification === 'ACTIVITY_LOADED') {
            this.activity = payload;
            this.updateDom();
            return;
        }

        if (notification === 'ALL_MODULES_STARTED') {
            Log.info(this.name + " Starting Refresh Interval...");
        }

    },

    buildApiUrl: function(){
        return this.config.sonarrProtocol + "://" + this.config.sonarrHost + ':' + this.config.sonarrPort + '/api/history?apikey=' + this.config.sonarrAPIKey + '&pageSize=' + this.config.perPage;
    },


    getLatestActivity: function(){
        console.log('Sonarr asking for refresh of activity');
        //this.sendSocketNotification('REFESH_ACTIVITY');
        this.refreshActivity();
    },

    refreshActivity: function(){
        var latestActivity;
        latestActivity = [];
        var self = this;

        console.log( this.buildApiUrl() );

        var activityRequest = new XMLHttpRequest();
        activityRequest.open("GET", this.buildApiUrl(), true);
        activityRequest.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    self.processActivity(JSON.parse(this.response));
                } 
            }
        };
        activityRequest.send();
    },

    processActivity: function(data){
        Log.info( data );
        this.activity = data.records;
        this.updateDom();
        //this.sendSocketNotification("ACTIVITY_LOADED", data);
    },

    // Override dom generator.
    getDom: function () {
        var wrapper, self;
        wrapper = document.createElement("div");

        self = this;

        wrapper.classList.add("small");

        // Display a loading message
        if (!this.activity) {
            wrapper.innerHTML = this.translate("LOADING...");
        } else {
            listEl = document.createElement("ul");
            for( var record_i in this.activity ){
                console.log( record_i, this.activity[ record_i ] );

                var thisRecord = this.activity[ record_i ];

                listItemEl = document.createElement("li");
                listItemEl.innerHTML = thisRecord.series.title + ' &ndash; Season ' + thisRecord.episode.seasonNumber + ' Episode ' + thisRecord.episode.episodeNumber;
                listEl.appendChild(listItemEl);
            }
            wrapper.innerHTML = "Total Records: " + this.activity.length;
            wrapper.appendChild(listEl);
        }

        return wrapper;
    },
});