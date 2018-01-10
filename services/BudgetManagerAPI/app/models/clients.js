const mongoose = require('mongoose')

const Client = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId
    }
})

mongoose.model('Client',Client)