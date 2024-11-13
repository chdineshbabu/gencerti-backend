import { Orginization } from "../models/orginization.model.js";
import { generateRandom } from "../utils/randomNumber.js";


export const createOrginization=async (req,res)=>{
    const {orgName, address, orgEmail } = req.body;
    const id = generateRandom()
    try{
        const checkOrg = await Orginization.findOne({orgEmail:orgEmail});
        if(checkOrg) return res.status(404).json({message:"Orginization already exist"});
        const newOrg = new Orginization({id,orgName, address, orgEmail});
        await newOrg.save();
        res.status(201).json(newOrg)
    }catch(error){
        res.status(400).json({message:'Error creating Orginization', error});
    }
}

export const createContract =async (req, res)=>{ 
    const {orgEmail, isContract, contractAddress, publicAddress} = req.body;
    try{
        const createContract = await Orginization.updateOne({orgEmail: orgEmail},{$set:{isContract:isContract,contractAddress:contractAddress,publicAddress:publicAddress}});
        res.status(201).json(createContract);
    }catch(error){
        res.status(400).json({message:'Error creating Contract', error});
    }
}

  
export const getOrginization = async(req,res)=>{
    const {orgEmail} = req.body;
    try{
        const org = await Orginization.findOne({orgEmail:orgEmail});
        if(!org) return res.status(404).json({message:'Orginization not found'});
        res.send(200).json(org)
    }catch(error){
        res.send(500).json({message: "Error getting Orginations", error})
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.body
    try {
      const deletedUser = await Orginization.deleteOne({orgEmail:id});
      if (!deletedUser) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  }; 