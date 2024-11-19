const express=require("express");
const commande = require("../models/Commande");
const commandeRouter=express.Router();

commandeRouter.post("/add", async(req,res)=>
    {
       try {
    let newcommande=new commande(req.body);
    let result=await newcommande.save();
    res.send({commande:result, msg:"commande is added" })
        }
        catch (error) {
    console.log(error)
        }
    })

    commandeRouter.get("/", async(req,res)=>
        {
           try {
        let result= await commande.find();
        res.send({commande:result, msg:"all commandes" })
            }
            catch (error) {
        console.log(error)
            }
        })

        commandeRouter.get("/:id", async(req,res)=>
            {
               try {
            let result= await commande.findById(req.params.id);
            res.send({commande:result, msg:"one commandes"})
                }
                catch (error) {
            console.log(error)
                }
            })
            commandeRouter.delete("/:id", async(req,res)=>
                {
                   try {
                let result= await commande.findByIdAndDelete(req.params.id);
                res.send({commande:result, msg:" commande not confirmed"})
                    }
                    catch (error) {
                console.log(error)
                    }
                })

                commandeRouter.put("/:id", async(req,res)=>
                    {
                       try {
                    let result= await commande.findByIdAndUpdate(
                        {_id:req.params.id},
                    {$set:{...req.body}});
                    res.send({commande:result, msg:" commande is update"})
                        }
                        catch (error) {
                    console.log(error)
                        }
                    })



                











module.exports=commandeRouter