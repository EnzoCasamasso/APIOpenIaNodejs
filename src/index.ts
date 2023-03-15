import { App } from "./app.js";

new App().server.listen(3000, () => {
    console.log("App runnig on port 3000 http://localhost:3000")
});