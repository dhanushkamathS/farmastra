const soildata = require("../constant/soilData")

exports.getSoil = (req,res) =>{
    res.json({data : soildata})
}