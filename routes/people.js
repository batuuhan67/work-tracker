const express = require('express');
const router = express.Router();

let people = [];

router.get('/', (req, res) => {
  res.json(people);
});

router.post('/', (req, res) => {
  const person = req.body;
  people.push(person);
  res.status(201).json(person);
});

module.exports = router;
