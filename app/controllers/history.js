const Data = require('../models/micr');

exports.getHistory = async (req, res, next) => {
    console.log(req.query.offset, req.query.limit);
    try {
        const ALL = await Data.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}