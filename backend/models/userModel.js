import { iDBComp } from "../sub-sistemas/ssDispatcher.js";

export class userModel{

    static async verifyUser({username, password}){
        const query = `SELECT * FROM usuario WHERE username = $1 AND password = $2`;
        const param = [username, password];
        const user = await iDBComp.exeQuery({query, param});
        return user.length > 0;
    }

    
}