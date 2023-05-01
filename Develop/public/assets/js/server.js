const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());