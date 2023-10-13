const express = require("express");

const cors = require("cors");

const postRouter = require("./routes/post");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/posts", postRouter);

const PORT = 4999;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
