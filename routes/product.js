const express=require("express");
const product = require("../models/Product");
const productRouter=express.Router();

productRouter.post("/add", async(req,res)=>
    {
       try {
    let newproduct=new product(req.body);
    let result=await newproduct.save();
    res.send({product:result, msg:"product is added" })
        }
        catch (error) {
    console.log(error)
        }
    })

    productRouter.get("/", async(req,res)=>
        {
           try {
        let result= await product.find();
        res.send({product:result, msg:"all products" })
            }
            catch (error) {
        console.log(error)
            }
        })

        productRouter.get("/:id", async(req,res)=>
            {
               try {
            let result= await product.findById(req.params.id);
            res.send({product:result, msg:"one products"})
                }
                catch (error) {
            console.log(error)
                }
            })
            productRouter.delete("/:id", async(req,res)=>
                {
                   try {
                let result= await product.findByIdAndDelete(req.params.id);
                res.send({product:result, msg:" product not confirmed"})
                    }
                    catch (error) {
                console.log(error)
                    }
                })

                productRouter.put("/:id", async(req,res)=>
                    {
                       try {
                    let result= await product.findByIdAndUpdate(
                        {_id:req.params.id},
                    {$set:{...req.body}});
                    res.send({product:result, msg:" product is update"})
                        }
                        catch (error) {
                    console.log(error)
                        }
                    })



                











module.exports=productRouter