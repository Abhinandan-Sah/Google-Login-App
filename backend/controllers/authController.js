const axios = require("axios");
const { oauth2client } = require("../utils/googleConfig");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;    
    const googleRes = await oauth2client.getToken({code});
    oauth2client.setCredentials(googleRes.tokens);
    // console.log(googleRes.tokens.access_token);
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${googleRes.tokens.access_token}`
    );
    // console.log("userRes:   ", userRes)
    const { name, email, picture } = userRes?.data;
    let user = await UserModel.findOne({ email });
    if (!user) {
      user = await UserModel.create({
        name,
        email,
        image: picture,
      });
    }
      const { _id } = user;
      const token = jwt.sign({ _id, email }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_TIMEOUT
      });
        return res.status(200).json({
            message: 'Success',
            token,
            user
        })
    
  } catch (err) {
    console.log("hi am error")
    res.status(500).json({
        message: 'Internal server error'
    })
  }
};

module.exports = { googleLogin };
