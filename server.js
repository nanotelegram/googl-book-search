const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

// Connect to the Mongo DB
const mongoDBconnection = mongoose.connect("mongodb://localhost/googleBooks", {
   useNewUrlParser: true, 
   useUnifiedTopology: true // !!!! => I added this https://www.npmjs.com/package/mongoose
  });

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
