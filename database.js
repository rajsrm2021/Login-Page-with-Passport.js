const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/passport")
    .then((e) => console.log(`connected to mongodb:${e.connection.host}`))
    .catch((err) => console.log(err));
};

const userSchema = new mongoose.Schema({
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
  });
  
  exports.User = mongoose.model("user", userSchema);