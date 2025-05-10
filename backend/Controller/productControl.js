const Products = require('../Models/productModel');

// Class For Filter, Sorting & Pagination
class APIfeature{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    filtering(){
        const queryObj = {...this.queryString};
        const excluededFields = ['page','sort','limit'];
        excluededFields.forEach(el => delete(queryObj[el]));
        
        // This convert our queryObj in json data format
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match =>'$' + match);
        
        this.query.find(JSON.parse(queryStr));

        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('');
            this.query = this.query.sort(sortBy);
        }
        else{
            this.query = this.query.sort('-createdAt');
        }
        
        return this;
    }

    pagination(){
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 9;
        
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}

const productControl = {
    getProducts : async(req,res) =>{
        try{
            const features = new APIfeature(Products.find(), req.query).filtering().sorting().pagination();
            const products = await features.query;
            res.json(products);
        }
        catch(err){
            res.status(500).json({msg : err.message});
        }
    },
    createProducts : async(req,res) =>{
        try{
            const {product_id,title,price,description,content,images,category} = req.body;
            if(!images) return res.status(400).json({msg : 'Images are not found...!'});

            const isExist = await Products.findOne({product_id});
            if(isExist) return res.status(400).json({msg : 'Product is already there...!!'});

            const newProduct = new Products({
                product_id,title : title.toLowerCase(),price,description,content,images,category
            });
            await newProduct.save();
            res.json({msg : 'New product added successfully...'});
        }
        catch(err){
            res.status(500).json({msg : err.message});
        }
    },
    updateProducts : async(req,res) =>{
        try{
            const productID = req.params.id;
            const isExist = await Products.findById(productID);
            if(!isExist) return res.status(400).json({msg : 'No Such Product Exist...!'});
            const {title,price,description,content,images,category} = req.body;
            if(!images) return res.status(400).json({msg : 'No images found...!'});

            await Products.findOneAndUpdate({_id : productID},{
                title : title.toLowerCase(),price,description,content,images,category
            });
            res.json({msg : 'Product Updated Successfully...'});
        }
        catch(err){
            res.status(500).json({msg : err.message});
        }
    },
    deleteProducts : async(req,res) =>{
        try{
            const productID = req.params.id;
            const isExist = await Products.findById(productID);
            if(!isExist) return res.status(400).json({msg : 'No Such Product Exist...!'});
            await Products.findByIdAndDelete(productID);
            res.json({msg : 'Product Deleted Successfully...'});
        }
        catch(err){
            res.status(500).json({msg : err.message});
        }
    }
}

module.exports = productControl;