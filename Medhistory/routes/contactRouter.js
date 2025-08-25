const express = require('express');
const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send(' All fields are required.');
  }

  console.log(`New message:
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `);

  res.send(' Message received! Thank you for contacting us.');
});

module.exports = router;
