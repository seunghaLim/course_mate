import mongoose from "mongoose";
import config from "../config";
import BoardDAO from "../model/BoardDAO";
import CourseDAO from "../model/CourseDAO";
import UserDAO from "../model/UserDAO";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set('autoCreate', true);
        /*
        BoardDAO.createCollection().then(function (collection) {
            console.log("Board Collection is created!");
        });

        CourseDAO.createCollection().then(function (collection) {
            console.log("Course Collection is created!");
        });

        UserDAO.createCollection().then(function (collection) {
            console.log("User Collection is created!");
        });
        */
        console.log("Mongoose Connected ...");

    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;