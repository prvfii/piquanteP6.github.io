const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
 
const saucesCtrl = require ('../controllers/sauce');

router.get('/',auth,saucesCtrl.displayAllSauces);
router.get('/:id',auth,saucesCtrl.displayOneSauce);

module.exports = router;