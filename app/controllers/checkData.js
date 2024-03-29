const Data = require('../models/micr');

exports.checkAllData = async (req, res, next) => {
    try {
        const ALL = await Data.findAll({ offset: req.query.offset, limit: req.query.limit });
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}