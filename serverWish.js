var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('js'));

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "m44t4236773T$",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;
    console.log(data)
    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render("index", { burgers: data });
  });
});
app.get("/burgers", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;
    res.json(data)
  })
})

// Post route -> back to home
app.post("/add", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);
  console.log("req.body", req.body)
  console.log(req.body.burger_name)

  // Test it
  // return res.send('You sent, ' + req.body.task);

  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) throw err;
  });
  res.redirect("/");
});

// app.delete("/", (req, res) => {
//   connection.query("")
// })

app.put("/update", (req, res) => {
  // UPDATE `burgers_db`.`burgers` SET `devoured`='1' WHERE `id`='1';
  console.log(req.body.id)
  console.log("MKAE")
  connection.query("UPDATE burgers_db.burgers SET devoured=1 WHERE id=?", [req.body.id], function(err, result) {
    if (err) throw err;
  })
  res.redirect(303, '/')
})

app.listen(port);
