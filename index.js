var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get("/", function(req, res){
	res.render("home");
});