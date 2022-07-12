import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ConfigServer } from "./config/config";
import { UserRouter } from "./modulos/user/user.router";
import { AcuRouter } from "./modulos/acu/acu.router";
import { CapituloRouter } from "./modulos/capitulo/capitulo.router";
import { ItemRouter } from "./modulos/item/item.router";
import { PeriodoRouter } from "./modulos/periodo/periodo.router";
import { SubcapituloRouter } from "./modulos/subcapitulo/subcapitulo.router";
import { SucursalRouter } from './modulos/sucursal/sucursal.router';
import { VersionRouter } from './modulos/version/version.router'
import { DataSource } from "typeorm";
import { LoginStrategy } from "./auth/strategies/login.strategy";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";
import { AuthRouter } from "./auth/auth.router";
import { MailRouter } from "./mail/mail.router";

class Server extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.passportUse();
    this.dbConnect();
    this.app.use(morgan("dev"));
    this.app.use(express.static(__dirname + "/templates"));

    this.app.use(
      cors({
        origin: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
      })
    );

    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new MailRouter().router,
      new AcuRouter().router,
      new CapituloRouter().router,
      new ItemRouter().router,
      new PeriodoRouter().router,
      new SubcapituloRouter().router,
      new SucursalRouter().router,
      new VersionRouter().router,
      new AuthRouter().router,
    ];
  }

  passportUse() {
    return [new LoginStrategy().use, new JwtStrategy().use];
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log("Connect Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Listen in ${this.port} :: ENV = ${this.getEnvironment("ENV")}`
      );
    });
  }
}

new Server();
