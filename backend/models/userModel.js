import { iDBComp } from "../sub-sistemas/ssDispatcher.js";

export class userModel{

    static async verifyUser({username, password}){
        const query = `SELECT * FROM usuario WHERE nom_user = $1 AND pass_user = $2`;
        const param = [username, password];
        const user = await iDBComp.exeQuery({query, param});
        console.log(user)
        return user.length > 0;
    }

    
}