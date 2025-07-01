const { Router } = require("express");
const { User } = require("../db");

const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const user = await User.create({
    username,
    password,
    firstName,
    lastName,
  });
  res.json({
    msg:"User created successfully"
  })
});
router.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});

module.exports = router;
