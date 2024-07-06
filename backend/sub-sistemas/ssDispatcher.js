import { DBComp } from "./DBComp.js";
import { SessionComp } from "./sessionComp.js";
import db_config from '../config/db_config.json' assert { type: "json" };
import session_config from '../config/session_config.json' assert { type: "json" };
// console.log(db_config);

export const iDBComp = new DBComp(db_config);
export const iSessionComp = new SessionComp(session_config);