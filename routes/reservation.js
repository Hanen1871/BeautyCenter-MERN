const express=require("express");
const reservation = require("../models/Reservation");
const reservationRouter=express.Router();

reservationRouter.post("/add", async(req,res)=>
    {
       try {
    let newreservation=new reservation(req.body);
    let result=await newreservation.save();
    res.send({reservation:result, msg:"reservation is added" })
        }
        catch (error) {
    console.log(error)
        }
    })

    reservationRouter.get("/", async(req,res)=>
        {
           try {
        let result= await reservation.find();
        res.send({reservation:result, msg:"all reservations" })
            }
            catch (error) {
        console.log(error)
            }
        })

        reservationRouter.get("/:id", async(req,res)=>
            {
               try {
            let result= await reservation.findById(req.params.id);
            res.send({reservation:result, msg:"one reservations"})
                }
                catch (error) {
            console.log(error)
                }
            })
            reservationRouter.delete("/:id", async(req,res)=>
                {
                   try {
                let result= await reservation.findByIdAndDelete(req.params.id);
                res.send({reservation:result, msg:" reservation not confirmed"})
                    }
                    catch (error) {
                console.log(error)
                    }
                })

                reservationRouter.put("/:id", async(req,res)=>
                    {
                       try {
                    let result= await reservation.findByIdAndUpdate(
                        {_id:req.params.id},
                    {$set:{...req.body}});
                    res.send({reservation:result, msg:" reservation is update"})
                        }
                        catch (error) {
                    console.log(error)
                        }
                    })



                











module.exports=reservationRouter