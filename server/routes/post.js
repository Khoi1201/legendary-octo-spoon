const express = require("express");
const router = express.Router();
const axios = require("axios");

const callScalapayApi = async (data) => {
  try {
    const response = await axios.post(
      "https://integration.api.scalapay.com/v2/orders",
      data,
      {
        headers: {
          Authorization: "Bearer qhtfs87hjnc12kkos",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {}
};

router.post("/", async (req, res) => {
  console.log("request: ", req.body);
  res.json(await callScalapayApi(req.body));
});

module.exports = router;
