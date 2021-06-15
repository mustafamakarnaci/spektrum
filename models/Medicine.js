const mongoose = require('mongoose');


const medicineSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    dose: {
        type: String,
    },
    medicinetime: {
        type: String
    }
}, { timestamps: true });


module.exports = mongoose.model('medicine', medicineSchema);
