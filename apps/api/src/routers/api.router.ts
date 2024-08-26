import { Router } from "express";
import { UserRouter } from "./user.router";
import { EventRouter } from "./event.router";


export class ApiRouter {
  private userRouter: UserRouter;
  private eventRouter: EventRouter;
  private router: Router;

  constructor() {
    this.router = Router();
    this.userRouter = new UserRouter();
    this.eventRouter = new EventRouter();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use("/users", this.userRouter.getRouter());
    this.router.use("/events", this.eventRouter.getRouter());
  }

  getRouter() {
    return this.router;
  }
}
