let express = require("express");
let app = express();
let os = require("os");
// console.log();
// console.log(global);
app.use(express.static(__dirname));
app.get("/info", (req, res) => {
  res.send(os.userInfo(),process.env.PORT);
});
app.listen(process.env.PORT || 5000);
