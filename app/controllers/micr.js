// const base64_encode = require('../util/encodefile');
const fs = require("fs");

exports.sayHello = async (req, res, next) => {
    try{ 
        res.status(200).json({"msg": "Server works!"})
    } catch(error) {
        res.status(500).json(error);
    }
}

exports.getMicrResult = async (req, res, next) => {
  try {
    // req.file has the uploaded file

    const body = {"imageBase64": base64img};
    const micr_res = await fetch(process.env.MICR_API);
    const photoBuffer = req?.file?.buffer;
    const binaryPhoto = Buffer.from(photoBuffer).toString('binary')
    const base64Photo = Buffer.from(binaryPhoto).toString('base64')

    return res.status(200).json({"msg": "image uploaded successfully"});
  } catch (error) {
    return res.status(500).json(error);
  }
};