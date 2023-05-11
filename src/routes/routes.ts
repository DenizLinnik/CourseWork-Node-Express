import { Router } from "express";
import posterController from "../controllers/posterController";
import UserController from "../controllers/userController";
import auth from "../middleware/checkAuth";

const router = Router();

router.post("/registration", UserController.registration);
router.get("/login", UserController.login);
router.get("/check", auth, UserController.check);

router.post("/create", posterController.create);
router.get("/getall", posterController.getAll);
router.get("/getone", posterController.getOne);
router.delete("/delete", posterController.delete);

export default router;
