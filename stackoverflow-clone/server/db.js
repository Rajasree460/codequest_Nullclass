const mongoose = require("mongoose");

const url =
  "mongodb+srv://laharajasree2study:Sq9UBqA0SHk5czlF@cluster0.rs8hl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
