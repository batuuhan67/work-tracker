const express = require('express');
const router = express.Router();

let materials = [];

router.get('/', (req, res) => {
  res.json(materials);
});

router.post('/', (req, res) => {
  const material = req.body;
  materials.push(material);
  res.status(201).json(material);
});

module.exports = router;
