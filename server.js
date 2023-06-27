const express = require("express");
const app = express();
const { connectMongoose, User } = require("./database.js");
const ejs = require("ejs");
const passport = require("passport");
const { initializingPassport } = require("./passportConfg.js");
const expressSession = require("express-session");

connectMongoose();
app.use(
    expressSession({
      secret: "secriet",
      resave: false,
      saveUninitialized: false,
    })
  );
initializingPassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


app.set("view engin", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/register", async (req, res) => {
  res.render("register.ejs");
});

app.get("/login",(req, res) => {
  res.render("login.ejs");
});

app.post("/register", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user) return res.status(400).send("username already exists");

  const newUser = await User.create(req.body);

  res.status(201).send(newUser);
});

app.post("/login", passport.authenticate("local", { failureRedirect: "/register" ,successRedirect:"/"}));


app.listen(3000, () => {
  console.log(" listing at http://localhost:3000/");
});
