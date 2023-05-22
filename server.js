const express = require('express');
const app = express();
const fs = require('fs');
const path=require('path');
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});