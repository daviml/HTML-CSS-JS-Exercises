let express = require("express");
let bodyParser = require("body-parser");

let app = express();

let items = ["compra","cozinha","come"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
let today = new Date();
let currentday = today.getDay();

let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

var day = today.toLocaleDateString("pt-BR", options);

res.render("list",{KindOfDay: day, newListItems: items });

});

app.post("/", function(req,res){
    let item = req.body.newItem;
    
    items.push(item);
    
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});