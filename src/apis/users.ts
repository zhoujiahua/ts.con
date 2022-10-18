import { Request, Response, Router } from "express";
import { Users } from "@/services/Users";
const UserRouter = Router();

UserRouter.get("/info", (req: Request, res: Response) => {
  const us = new Users();
  let userInfo = us.getUserInfo(1);
  return res.status(200).json(userInfo);
});

UserRouter.get("/role", (req: Request, res: Response) => {
  const us = new Users();
  let roleInfo = us.getRoleInfo(1);
  return res.status(200).json(roleInfo);
});

export default UserRouter;
