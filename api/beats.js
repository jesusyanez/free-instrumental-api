const express = require("express");
const router = express.Router();
const beatList = require("./scrapedbeats.json");

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      0: beatList[Math.floor(Math.random()*beatList.length)],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;