import {Message} from "../model/messageschema.js"

export const sendMessage =async(req,res,next)=>{
    
    const{firstName,lastName,email,phone,message} =req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
        return res.status(400).json({
            sucess:false,
            message:"Please Fill Full Form"
        });
    }

    await Message.create({firstName,lastName,email,phone,message});
    res.status(200).json({
        sucess:true,
        message:"Form Submited!"
    });

};