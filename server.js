const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const peopleRouter = require('./routes/people');
const machinesRouter = require('./routes/machines');
const materialsRouter = require('./routes/materials');

app.use('/api/people', peopleRouter);
app.use('/api/machines', machinesRouter);
app.use('/api/materials', materialsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
