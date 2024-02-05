import username from "../models/userModel.js"

export const create = async(req,res)=>{
    try{
        const userdata = new username(req.body);
        if(!userdata){
            return res.status(404).json({msg:"user data not found"});
        }
        const saveData = await userdata.save();
        res.status(200).json(saveData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}
export const getAll = async(req,res)=>{
    try{
        const userdata = await username.find();
        if(!userdata){
            return res.status(404).json({msg:"Users data not found"});
        }
        res.status(200).json(userdata);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getone = async(req,res)=>{
    try{
        const id = req.params.id;
        const userexit = await username.findById(id);
        if(!userexit){
            return res.status(404).json({msg:"User not found"});
        }
        res.status(200).json(userexit);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}
export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const userexit = await username.findById(id);
        if(!userexit){
            return res.status(401).json({msg:"User not found"});
        }
        const updatedata = await username.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User update succesfully"});
    }
    catch(error){
        res.status(500).json({error:error});
    }
}
export const deleteuser = async(req,res)=>{
    try{
       const id = req.params.id; 
       const idexit = await username.findById(id);
       if(!idexit){
        return res.status(401).json({msg:"User not found"});
       }
       await username.findByIdAndDelete(id);
       res.status(200).json({msg:"User deleted"});

    }
    catch(error){
        res.status(500).json({error:error});
    }
}