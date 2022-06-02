const parseHeader = require("../../services/parseHeader");

const getController = (req,res) => {
  console.log('HeaderParse request');
  try {
    const parsedHeader = parseHeader(req);
    return res.json(parsedHeader)
  } catch (e) {
    res.status(400).json({error:e.message})
  }
}

module.exports = {getController}