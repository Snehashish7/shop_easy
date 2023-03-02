import { mongoose } from "mongoose";

const connectDB = async() => {
    try {
        
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            // From the documentation, "useNewUrlParser, useUnifiedTopology, useFindAndModify, 
            // and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if 
            // useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and 
            // useFindAndModify is false. Please remove these options from the code."

            // useUnifiedTopology:true,
            // useNewUrlParser:true,
        })
        console.log(`Connected via ${connect.connection.host}`.cyan.underline) //cyan.underline is from colors.js

    } catch (error) {
        console.log(error.message.red.bold);   //red,bold from colors.js
        process.exit(1);
    }
}

export default connectDB;
