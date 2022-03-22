let mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
}, { timestamps: true });

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = new mongoose.model("staff", schema)