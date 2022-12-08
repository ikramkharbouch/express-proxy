// const base64_encode = require('../util/encodefile');
const fs = require("fs");
const axios = require("axios");
const MICR_RESULT = require("../models/micr");
const { convertObjToArr, getBase64ofFile }  = require("../util/micr");

exports.sayHello = async (req, res, next) => {
  try {
    res.status(200).json({ msg: "Server works!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMicrResult = async (req, res, next) => {
  try {
    // check files here to send an error message

    // get the base64 of the uploaded image
    let base64 = getBase64ofFile(req.files);
  
    try {
      let imgData = { imageBase64: base64 };
      const response = await axios({
        method: "POST",
        url: process.env.MICR_API,
        headers: {
          "Content-Type": "application/json",
        },
        data: imgData,
      }).then((res) => res.data);

      let micr_result = convertObjToArr(response.splitText);

      const Micr_Model = {
        name: "", 
        codeVille: micr_result['cityCode'], 
        codeBank: micr_result['bankCode'], 
        numCompte24: micr_result['accountNumber'], 
        codeCMC7: response.rawText
      }

      const micr = await MICR_RESULT.create(Micr_Model);

      return res.status(200).send({ result: response });
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
