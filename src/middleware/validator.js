'use strict';

const validator = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    res.status(500).send('name query needed for this route')
  }
}

module.exports = validator;
