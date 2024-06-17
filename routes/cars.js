const express = require("express");
const router = express.Router();
const carCtrl = require("../controllers/cars");

router.get('/', carCtrl.index);
router.get('/new', carCtrl.new );
router.post('/', carCtrl.create);
router.get('/:carId', carCtrl.show);
router.delete('/:carId', carCtrl.delete);

module.exports = router;