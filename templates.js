this["MMMSonarrActivity"] = this["MMMSonarrActivity"] || {};
this["MMMSonarrActivity"]["Templates"] = this["MMMSonarrActivity"]["Templates"] || {};

this["MMMSonarrActivity"]["Templates"]["main"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"cycle-slideshow episode-slideshow\" \n    data-cycle-fx=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.scrollEffect : stack1), depth0))
    + "\" \n    data-cycle-timeout=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.scrollTimeout : stack1), depth0))
    + "\"\n    data-cycle-slides=\"> div\"\n    >\n    \n</div>";
},"useData":true});

this["MMMSonarrActivity"]["Templates"]["slide"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"row episode-slide\">\n		<div class=\"slide-image\">\n			<img src=\""
    + alias4(((helper = (helper = helpers.seriesPoster || (depth0 != null ? depth0.seriesPoster : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seriesPoster","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.seriesName || (depth0 != null ? depth0.seriesName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seriesName","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\" />\n		</div>\n		<div class=\"slide-copy\">\n			<h4 class=\"bright\">\n				<span class=\"title\">"
    + alias4(((helper = (helper = helpers.seriesName || (depth0 != null ? depth0.seriesName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seriesName","hash":{},"data":data}) : helper)))
    + "</span>\n				<span class=\"info\">"
    + alias4(((helper = (helper = helpers.seString || (depth0 != null ? depth0.seString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seString","hash":{},"data":data}) : helper)))
    + "</span>\n			</h4>\n			<h5 class=\"bright\">"
    + alias4(((helper = (helper = helpers.episodeName || (depth0 != null ? depth0.episodeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"episodeName","hash":{},"data":data}) : helper)))
    + "</h5>\n			<div class=\"overview-box\">\n				<p class=\"light\">"
    + alias4(((helper = (helper = helpers.episodeDescription || (depth0 != null ? depth0.episodeDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"episodeDescription","hash":{},"data":data}) : helper)))
    + "</p>\n				<p class=\"read-more\">&nbsp;</p>\n			</div>\n			\n		</div>\n	</div>\n";
},"useData":true});