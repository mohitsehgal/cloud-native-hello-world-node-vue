const express = require('express');
const router = express.Router();

const UserService = require('../services/users');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const response = await UserService.getUsers();
  return res.json(response);
  
});

module.exports = router;
