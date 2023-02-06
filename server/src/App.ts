import * as express from "express";
import * as bodyParser from "body-parser";
import { SessionController } from "./controller/session.controller";
import { APILogger } from "./logger/api.logger";
import { config } from "dotenv";

const cors = require("cors");

class App {
    public express: express.Application;
    public logger: APILogger;
    public sessionController: SessionController;

    constructor() {
        config();
        this.express = express();

        this.middleware();
        this.routes();

        this.logger = new APILogger();
        this.sessionController = new SessionController();
    }

    private middleware(): void {
        this.express.use(cors({ origin: "*" }));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.get("/api/sessions", (req, res) => {
            this.sessionController.getSessions().then((data) => res.json(data));
        });

        this.express.post("/api/session", (req, res) => {
            this.sessionController
                .createSession(req.body.session)
                .then((data) => res.json(data));
        });

        this.express.put("/api/session", (req, res) => {
            this.sessionController
                .updateSession(req.body.session)
                .then((data) => res.json(data));
        });

        this.express.delete("/api/session/:id", (req, res) => {
            this.sessionController
                .deleteSession(req.params.id)
                .then((data) => res.json(data));
        });
    }
}

export default new App().express;
