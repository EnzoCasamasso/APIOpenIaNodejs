import { Router } from "express";
import { firstController } from "./app/controller/FirstController.js";
const router = Router();
//Routes
router.get("/home", firstController.home);
export { router };
//# sourceMappingURL=router.js.map