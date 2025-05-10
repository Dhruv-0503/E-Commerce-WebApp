const Category = require('../Models/categoryModel');

const categoryControl = {
    getCategories : async(req,res) =>{
        try{
            const categories = await Category.find();
            res.json(categories);
        }
        catch(err){
            return res.status(500).json({msg : err.message});
        }
    },
    createCategory : async(req,res) =>{
        try{
            const {name} = req.body;
            const isExist = await Category.findOne({name});
            if(isExist) return res.status(400).json({msg : 'Category Already Exists...!!'});

            const newCategory = new Category({name});
            await newCategory.save();
            res.status(200).json({msg : 'Category Added Successfully...!!'});
        }
        catch(err){
            return res.status(500).json({msg : err.message});
        }
    },
    deleteCategory : async(req,res) =>{
        try{
            // We can also use : await Category.findByIdAndDelete(req.params.id)
            const categoryId = req.params.id;
            const deleteCategory = await Category.deleteOne({_id : categoryId});

            if(!deleteCategory) return res.status(400).json({msg : 'Category Not Exist...!'});
            return res.status(200).json({msg : 'Category Deleted Successfully...!'})
        }
        catch(err){
            return res.status(500).json({msg : err.message}); 
        }
    },
    updateCategory : async(req,res) =>{
        try{
            const {name} = req.body;
            const isExist = await Category.findOne({_id : req.params.id});
            if(!isExist) return res.status(400).json({msg : 'No Such Category...!'});
        
            await Category.updateOne({_id : req.params.id}, {name});
            res.status(200).json({msg : 'Category Updated Successfully...!'});
        }
        catch(err){
            return res.status(500).json({msg : err.message});
        }   
    }
}

module.exports = categoryControl;