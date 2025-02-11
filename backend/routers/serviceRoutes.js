const express = require('express');
const service=require('../models/Service');
const Service = require('../models/Service');
const router = express.Router();

//get all services
router.get('/', async (req, res) => {
    try{
        const services=await service.find();
        res.json(services);

    }
    catch(err){
        res.status(500).json({message:err.message});

    }

});

//get single service
router.get('/:id', async (req, res) => {
    try{
        const service=await service.findById(req.params.id);
        if(!service) return res.status(404).json({message: 'Service not found'});
        res.json(service);
    }
    catch(err){
        res.status(500).json({message:err.message});

    }
    });

    //add new service
    router.post('/', async (req, res)=>{
        const service=new service({
            title:req.body.title,
            description:req.body.description,
        });
        try{
            const newservice= await service.save();
            res.status(201).json(newservice);

        }
        catch(err){
            res.status(400).json({message:err.message});
        }

        

    });

    //update service
    router.put('/:id', async(req,res)=>{
        try{
        const service=await Service.findByIdUpdate(
            req.params.id,
            {
                title:req.body.title,
                description:req.body.description,
            },
            {new:true}
        );
            if (!service) 
                return res.status(404).json({message: 'Service not found'});
            res.json(service);
            
    }
    catch(err){
        res.status(400).json({message:err.message});

    }

    });

    //delete service
    router.delete('/:id', async(req,res)=>{
        try{
            const service=await Service.findByIdAndDelete(req.params.id);
            if (!service)
                return res.status(404).json({message: 'Service not found'});
            res.json({message: 'Service deleted'});
        }
        catch(err){
            res.status(500).json({message:err.message});
    }
});

module.exports=router;
