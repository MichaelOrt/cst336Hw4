const express = require("express");
const faker = require('faker')
const app = express();


app.use(express.static("public"));

app.engine('html', require('ejs').renderFile);

//routes
app.get("/", function(req, res){
     res.render('index.ejs');
});
app.get("/attacks", function(req, res){
     res.render('attacks.ejs');
});
app.get("/examples", function(req, res){
     res.render('examples.ejs');
});
app.get("/prevention", function(req, res){
	res.render('prevention.ejs');
});
app.get("/faker", function(req, res){
	var info = [7];
	info[0] = faker.name.findName();
	info[1] = faker.image.imageUrl();
	info[2] = faker.address.city();
	info[3] = faker.address.zipCode();
	info[4] = faker.address.streetAddress();
	info[5] = faker.address.county();
	info[6] = faker.address.country();
	res.render('faker.ejs',{'info': info});
});
//process.env.PORT, process.env.IP
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Running Express Server..."); 
});