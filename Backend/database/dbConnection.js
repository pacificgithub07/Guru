import mongoose from "mongoose";    

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "COLLEGE_MERN_GURU"
    }).then(()=>{
        console.log("Connected to database! ");
    }).catch(()=>{
        console.log("Some error occured while data base ");
    })
}