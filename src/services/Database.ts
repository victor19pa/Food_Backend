import mongoose from "mongoose";
import { MONGO_URI } from "../config";

export default async () => {
  try {
    await mongoose
      .connect(MONGO_URI, {})
      .then((result) => {
        console.log("DB connect");
      })
      .catch((err) => console.log("error " + err));

    console.log("DB Connected...");
  } catch (error) {
    console.log(error);
  }
};
