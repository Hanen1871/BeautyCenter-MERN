const express=require("express");
const imagedetails = require("../models/Imagedetails");
const imagedetailsRouter=express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file, cb){
        const uniqueSuffix = Data.now();
        cb(null, uniqueSuffix + file.originalname);

    },
});
const upload =multer({storage: storage})
imagedetailsRouter.post("/upload-image",upload.single("image"), async(req,res)=>
    {
       try {
    let newimagedetails=new imagedetails(req.body);
    let result=await newimagedetails.save();
    res.send({imagedetails:result, msg:"imagedetails is added" })
        }
        catch (error) {
    console.log(error)
        }
    })
    // imagedetailsRouter.get("/", async(req,res)=>
    //     {
    //        try {
    //     let result= await imagedetails.find();
    //     res.send({imagedetails:result, msg:"Success!!!!!!" })
    //         }
    //         catch (error) {
    //     console.log(error)
    //         }
    //     })

        // imagedetailsRouter.get("/:id", async(req,res)=>
        //     {
        //        try {
        //     let result= await imagedetails.findById(req.params.id);
        //     res.send({imagedetails:result, msg:"one imagedetailss"})
        //         }
        //         catch (error) {
        //     console.log(error)
        //         }
        //     })
        //     imagedetailsRouter.delete("/:id", async(req,res)=>
        //         {
        //            try {
        //         let result= await imagedetails.findByIdAndDelete(req.params.id);
        //         res.send({imagedetails:result, msg:" imagedetails not confirmed"})
        //             }
        //             catch (error) {
        //         console.log(error)
        //             }
        //         })

        //         imagedetailsRouter.put("/:id", async(req,res)=>
        //             {
        //                try {
        //             let result= await imagedetails.findByIdAndUpdate(
        //                 {_id:req.params.id},
        //             {$set:{...req.body}});
        //             res.send({imagedetails:result, msg:" imagedetails is update"})
        //                 }
        //                 catch (error) {
        //             console.log(error)
        //                 }
        //             })



                











module.exports=imagedetailsRouter