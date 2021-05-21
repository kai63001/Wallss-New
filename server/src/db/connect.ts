import mongoose from "mongoose";
import colors from "colors";

const Connect = (uri: string) => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connect error"));
    db.once("open", () => {
        console.log(colors.bold.blue("connect.ts :"),colors.bgGreen(' Connect Database Success '));
    });
  } catch (error) {
    console.log(colors.red("connect.ts error"), error);
  }
};

export default Connect;
