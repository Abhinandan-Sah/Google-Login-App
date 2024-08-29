const router = require('express').Router()
const {googleLogin} = require('../controllers/authController');

router.get('/test', (req, res)=>{
    res.send('test pass');
});
router.post('/google', googleLogin)
module.exports=router;