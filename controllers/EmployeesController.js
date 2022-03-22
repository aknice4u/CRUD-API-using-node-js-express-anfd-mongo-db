const staffx = require("../models/employeeModel");


exports.addEmployee = (req, res) => {
    const saveEmp = new staffx({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    saveEmp.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred ."
            });
        });
}

exports.findAll = (req, res) => {
    const title = req.query.name;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    staffx.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};