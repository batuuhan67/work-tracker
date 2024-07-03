const express = require('express');
const router = express.Router();

let machines = [];

router.get('/', (req, res) => {
  res.json(machines);
});

router.post('/', (req, res) => {
  const machine = req.body;
  machines.push(machine);
  res.status(201).json(machine);
});

module.exports = router;
