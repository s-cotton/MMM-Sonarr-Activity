# Module: Sonarr Activity
This is a module for MagicMirror, intended to show the latest downloaded episodes from Sonarr.

## Installing the module
Clone this repository in your `~/MagicMirror/modules/` folder `( $ cd ~MagicMirror/modules/ )`:
````javascript
git clone https://github.com/s-cotton/MMM-Sonarr-Activity.git
````

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
{
    module: 'MMM-Sonarr-Activity',
    position: 'bottom_left',
    header: 'Recent Sonarr Activity',
    config: {
        sonarrProtocol: "http",
        sonarrHost: "localhost",
        sonarrPort: "8989",
        sonarrAPIKey: "",
        perPage: 15,
        scrollTimeout: 10000,
        scrollEffect: 'fade',
        updateInterval: 300000,
    }
},
]
````

## Configuration options

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
    <tr>
			<td><code>sonarrProtocol</code></td>
			<td>http or https<br> This value is <b>REQUIRED</b></td>
		</tr>
		<tr>
			<td><code>sonarrHost</code></td>
			<td>localhost or FQDN<br> This value is <b>REQUIRED</b></td>
		</tr>
		<tr>
			<td><code>sonarrPort</code></td>
			<td>8989 is the default, 80 if you are using a FQDN<br> This value is <b>REQUIRED</b></td>
		</tr>
		<tr>
			<td><code>sonarrAPIKey</code></td>
			<td>API Key from Sonarr Installation<br> This value is <b>REQUIRED</b></td>
		</tr>
		<tr>
			<td><code>perPage</code></td>
			<td>Number of Updates to read from Sonarr. Default value is 15</td>
		</tr>
		<tr>
			<td><code>scrollTimeout</code></td>
			<td>How long to show each update. Default value is 10 seconds (10000)</td>
		</tr>
		<tr>
			<td><code>scrollEffect</code></td>
			<td>Scroll Effect between items, possible values are:<br />"fade", "fadeout", "none", "scrollHorz"<br />Default value is "scrollHorz"</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>How long between data calls to Sonarr. Default value is 15 minutes (300000)</td>
		</tr>
	</tbody>
</table>
