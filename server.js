/**
 * Module dependencies.
 */

// mongoose setup
require('./db/db');

var express = require('express');
var routes = require('./routes'); // -> reades ./routes/index.js
var apiEntries = require('./routes/entries/api-entries');
var apiAdmin = require('./routes/admin/api-admin');
var admin = require('./routes/admin');
var experimental = require('./routes/experimental');
var http = require('http');
var path = require('path');
var moment = require('moment');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//require('log-timestamp');
//require('log-timestamp')(function() { return '[' + new Date().toISOString() + '" message="%s"' });
require('log-timestamp')(function() { return '[' + moment().format('ddd, D MMM YYYY hh:mm:ss Z') + '] - %s' });
//[Tue, 17 Oct 2017 13:33:00 GMT]

var app = express();

app.set('host', process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '30000');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('[:date[web]] :remote-user :method :url - status: :status'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/*
app.configure('production', function() {
	app.use(express.errorHandler());
});
*/
// routes to jade templates
app.get('/', routes.index);
app.get('/admin', routes.admin);
app.get('/admin_item', routes.admin_item);
app.get('/stats', routes.stats);
app.get('/statistics', routes.statistics);
app.get('/geo', routes.geoloc);

// restful services for entries using Promises
app.post('/api/entries', apiEntries.createEntry);
app.get('/api/entries/:id', apiEntries.getEntryById);
app.put('/api/entries/:id', apiEntries.saveEntry);
app.delete('/api/entries/:id', apiEntries.deleteEntry);
app.get('/api/entries', apiEntries.getEntries);


// geofencing
app.post('/geofence', routes.geofence);
app.post('/geolocation', routes.backgroundGeolocation);

// admin stuff
//app.delete('/entries', admin.deleteAllTimeEntries);
//app.put('/admin/rnd_entries', admin.setRandomTimeEntries);
app.get('/admin/maintain', admin.maintain);
//app.post('/admin/dump/timeentry', admin.dumpTimeEntry);
app.post('/admin/backup/timeentry', admin.backupTimeEntry);

app.post('/api/admin/dump/timeentry', apiAdmin.dumpTimeEntries);
app.post('/api/admin/backup/timeentry', apiAdmin.backupTimeEntries);

// statistics stuff
app.put('/stats', admin.calcStats);
app.get('/stats/:date', admin.getStatsDay);
app.delete('/stats', admin.deleteAllStatsDays);
app.get('/statistics/aggregate', admin.getStatsByTimeBox);

// maintain stuff
app.get('/ping', experimental.ping);
app.get('/experiment', experimental.experiment);

// start the web service
http.createServer(app).listen(app.get('port'), app.get('host'), () => {
	console.log("\nExpress server listening on http://" + app.get('host') + ':' + app.get('port'));
});


/* start scheduler */
require('./routes/scheduler').scheduleTasks();
