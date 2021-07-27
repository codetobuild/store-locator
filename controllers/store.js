

const Store = require('../model/store')

// @desc get all stores in
// @route GET /api/v1/stores
// @access public
exports.getStores = async (req, res, next) => {
    try{
        const stores = await Store.find({});

        return res.status(200).json({ 
            success:true,
            count: stores.length,
            data: stores,
        });
    }catch(err) {
        console.error(err);
        res.status(500).json({success:false, error:'server error'});

    }
    res.send('hellow cccccc');

}

// @desc  create stores 
// @route POST /api/v1/stores
// @access public
exports.addStore = async (req, res, next) => {
    try{
        console.log(req.body);
        const store = await Store.create(req.body);

        return res.status(200).json({
            success:true,
            data: store,
        })

    }catch(err) {
        console.error(err);
        if(err.code===11000){
            res.status(400).json({success:false, error:'storeId already exist'});
        }else{
            res.status(500).json({success:false, error:'server error'});
        }

    }

}
