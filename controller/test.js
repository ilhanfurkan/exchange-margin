const Test = require("../models/test");
const bcrypt = require("bcrypt");

exports.testController = async (req, res) => {
  try {
    const { name } = req.body;

    console.log("req body name: ", name);

    const test = new Test({ name });
    await test.save();

    const token = createToken({ name: test.name }, "1d");

    return res.status(200).json({
      result: {
        name: test.name,
      },
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
