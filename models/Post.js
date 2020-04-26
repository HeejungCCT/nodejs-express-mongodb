const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    item: {
        type:String,
        required:true
    },
    session: {
        type: String,
        required: true
    },
    price: {
        type: String,    
        required: true
    }
});


module.exports = mongoose.model('Posts', PostSchema);