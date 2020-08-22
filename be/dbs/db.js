const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://dacnpm_nhom1:dacnpm_nhom1@cluster0-fhlo8.mongodb.net/pttkhttk_r16?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      (database) => console.log("Kết nối database")
    );
  } catch (error) {
    return console.log("could not connect");
  }
};

module.exports = connectDB;
