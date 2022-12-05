// const base64_encode = require('../util/encodefile');
const fs = require("fs");
const axios = require("axios");

exports.sayHello = async (req, res, next) => {
  try {
    res.status(200).json({ msg: "Server works!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBase64ofFile = (imgFiles) => {
  let res = JSON.parse(JSON.stringify(imgFiles));
  const buffData = res["undefined"].data.data;
  const encoded = Buffer.from(buffData).toString("base64");

  return encoded;
}

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

      console.log("response is", response);
      return res.status(200).send({ result: response });
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
