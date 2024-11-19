const express = require("express");
const cors =require("cors");
const connectDB = require('./config/dbConnect');
const app = express();
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(cors());
// app.use(express.static('public'));
// const multer =require('multer');
// const path =require('path');
// const User = require("./models/User");
// const storage =multer.diskStorage({
//  destination: (req, file, cb) =>{
//     cb(null,'public/Images')
//  },
//  filename: (req, file, cb) => {
//     cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//  }  
// })
// const upload= multer({
//     storage: storage
// })

// app.post('/upload', upload.single('file'), (req,res)=>{
// User.create({image: req.file.filename})
// .then(result => res.json(result))
// .catch(err => console.log(err))
// })
// app.get('/getImage',(req, res) =>{
//     User.find()
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

app.use("/user", require("./routes/user"));
app.use("/services", require("./routes/services"));
app.use("/reservation", require("./routes/reservation"));
app.use("/product", require("./routes/product"));
app.use("/commande", require("./routes/commande"));


const PORT = process.env.PORT;


app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is runnig on ${PORT}`)
);