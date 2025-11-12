require("dotenv").config()
const app = require("./app")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
  }).catch(err => console.error("MongoDB connection error:", err));


}).catch(err => console.error("MongoDB connection error:", err))
