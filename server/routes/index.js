const Routes = require("express").Router();
const login = require('./login')
// const api = require("../routes/api");
// const test = require("../routes/test");
// const notFound = require("../utils/notfound");
// const errorHandle = require("../utils/errorHandle");

Routes.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  res.send("Test");
});
Routes.post("/login", login);
// Routes.use("/api", api);
// Routes.use("/test", test);
// Routes.use(notFound);
// Routes.use(errorHandle);

module.exports = Routes;
