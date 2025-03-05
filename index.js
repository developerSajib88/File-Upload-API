const app = require("./app");
const config = require("./config/config");
require("./config/db");

const PORT = config.app.port || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running port at http://localhost:${PORT}`);
});