const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const sha256 = require("js-sha256").sha256;
const { createClient } = require("@supabase/supabase-js");
const session = require("express-session");

// * PORT number of the web server
const PORT = process.env.PORT || 4000;

// * Get the config file
const env = dotenv.config().parsed;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// * Using the current section (no save)
app.use(
  session({
    UserID: null,
    secret: "F0od0rd3r1ng$yst3m",
    resave: false,
  })
);

/*
 * Connect to the database (supabase)
 */
const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

/* 
    * Default routing => get to the main menu first.
    ! Path route can be change
*/
app.get("/", (req, res) => {
  res.redirect("/MainMenu");
});

/*
    * Get the main menu of food ordering website
    TODO : show the main menu page
*/
app.get("/MainMenu", (req, res) => {
  res.render("mainmenu", {});
});

/* 
    * Get the login page 
    TODO: get the line cridential and use it as the userID (maybe auto login)
*/
app.get("/Login", (req, res) => {
  res.render("login");
});


/* 
    * Sign in process (manual)
    TODO: option to select between the line or gmail sign in method
*/
app.get("/SignIn", (req, res) => {});


// > Let all of the `POST` method be here
/*
    * Get the data when clicking the submit button (POST method)
    TODO: using hash to cramble the data and then check with the server
*/
app.post("/Login", (req, res) => {

});

/*
    * Get the data when clicking the submit button (POST method)
    TODO: using hash to cramble the data and then check with the server
*/
app.post("/SignIn", (req, res) => {});

//  - Open the connection
app.listen(PORT, () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`Server running on port ${PORT}`);
  console.log(`Server running at: ${serverUrl}`);
});
