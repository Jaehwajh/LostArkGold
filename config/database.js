const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// const connectDB = async() => {
//     try {
//         const conn = await MongoClient.connect(process.env.DB_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     }catch(err){
//         console.error(err);
//         process.exit(1);
//     }
// }
const dbOptions = {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
}

const connectDB = mongoose.connect(process.env.DB_STING, dbOptions).then(m => m.connection.getClient());

module.exports = connectDB; 