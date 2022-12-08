function convertObjToArr(obj) {
    let result = [];
    for(let key in obj) {
      result[key] = obj[key];
    }
    return result;
}

const getBase64ofFile = (imgFiles) => {
    let res = JSON.parse(JSON.stringify(imgFiles));
    const buffData = res["undefined"].data.data;
    const encoded = Buffer.from(buffData).toString("base64");
  
    return encoded;
  }

module.exports = { convertObjToArr, getBase64ofFile }