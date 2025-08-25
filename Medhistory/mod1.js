const express = require('express');
const path = require('path');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Med_Check', 'hacks.html'));
});


router.get('/hacks.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'Med_Check', 'hacks.css'));
});


const Images = [
  'Accuracy.webp',
  'Image.jpg',    
  'Integration.png',
  'Process.jpg',
  'Security.png',
  'Summary.webp',
  'Timesaving.jpg',
  'Upload.png'
];


Images.forEach(file => {
  router.get('/' + file, (req, res) => {
    res.sendFile(path.join(__dirname, 'Med_Check', 'images', file));
  });
});


router.get('/Image.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'Med_Check', 'images', 'Image.jpg'));
});


router.get('/hacksphere', (req, res) => {
  res.sendFile(path.join(__dirname, 'Hacksphere', 'hacks.html'));
});

router.get('/hacksphere/hacks.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'Hacksphere', 'hacks.css'));
});


router.use('/home', homeRouter);
router.use('/contact', contactRouter);

module.exports = router;
