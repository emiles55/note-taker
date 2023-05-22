const express = require('express');
const app = express();
const fs = require('fs');
const path=require('path');
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = express.Router();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
);
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});