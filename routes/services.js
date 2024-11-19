const express=require("express");
const services = require("../models/Services");
const servicesRouter=express.Router();

servicesRouter.post("/add", async(req,res)=>
    {
       try {
    let newservices=new services(req.body);
    let result=await newservices.save();
    res.send({services:result, msg:"services is added" })
        }
        catch (error) {
    console.log(error)
        }
    })

    servicesRouter.get("/", async(req,res)=>
        {
           try {
        let result= await services.find();
        res.send({services:result, msg:"all servicess" })
            }
            catch (error) {
        console.log(error)
            }
        })

        servicesRouter.get("/:id", async(req,res)=>
            {
               try {
            let result= await services.findById(req.params.id);
            res.send({services:result, msg:"one servicess"})
                }
                catch (error) {
            console.log(error)
                }
            })
            servicesRouter.delete("/:id", async(req,res)=>
                {
                   try {
                let result= await services.findByIdAndDelete(req.params.id);
                res.send({services:result, msg:" services is deleted"})
                    }
                    catch (error) {
                console.log(error)
                    }
                })
                servicesRouter.put("/:id", async(req,res)=>
                    {
                       try {
                    let result= await services.findByIdAndUpdate(
                        {_id:req.params.id},
                    {$set:{...req.body}});
                    res.send({services:result, msg:" services is update"})
                        }
                        catch (error) {
                    console.log(error)
                        }
                    })











module.exports=servicesRouter