import pkg from 'pg';
const { Pool } = pkg;

export class DBComp{
    constructor(config){
        this.config = config;
        this.Pool = new Pool(this.config);
    }

    async getConnection(){
        try{
            const client = await this.Pool.connect();
            return client;
        }catch(err){
            console.log(err);
            return null;
        }
    }

    async exeQuery({query, param = []}){
        const client = await this.getConnection();
        console.log(`${query}, ${param}`)
        try {
            const {rows} = await client.query(query, param);
            return rows;
        } catch (error) {
            console.log(error);
            return null;
        }finally{
            await this.closeConnection(client);
        }
    }

    async closeConnection(client){
        try{
            await client.release();
        }catch(err){
            console.log(err);
        }
    }
}