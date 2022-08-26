const Sauce = require('../models/Sauce');

exports.displayAllSauces = (req, res, next) => {
    Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json(error));
   };

  
   exports.displayOneSauce = (req,res,next) => {
    Sauce.findOne({ _id : req.params.id})
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json(error));
  };

