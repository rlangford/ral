
/**
 * Module dependencies.
 */

var express = require('express')
  , connect = require('connect')
  , routes = require('./routes')
  , bookmarks = require('./routes/bookmarks')
  , resume = require('./routes/resume')
  , robots = require('./routes/robots')
  , errpage = require('./routes/errpage')  
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 1338);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')))
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.use(connect.compress());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/bookmarks', bookmarks.index);
app.get('/resume', resume.index);

app.get('/robots.txt', robots.robots);
app.get('/sitemap.xml', robots.sitemap);

app.use(function(req,res,next){
  res.status(404);
  res.render('errpage',{title: "Page Not Found", showFullNav: false, url:req.url });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});