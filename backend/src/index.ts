const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req: any, res: any) => {
  res.json({
    status: true,
    message: "welcome to home page"
  })
})

app.listen(PORT, () => {
  console.log(`http server started on PORT : ${PORT}`);
})

