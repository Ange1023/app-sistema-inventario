import { Pool, PoolClient } from 'pg';
import db_config from './config/db-config.json'

class dbComponent{

    private config: Object
    private client: Pool
   
    

    constructor(config: Object){
        this.config = config
        this.client = new Pool(this.config)
    }

    async getConnection(): Promise<PoolClient>{
        try {
            return await this.client.connect()
        } catch (error) {
            console.log(error)
            throw new Error("No se pudo obtener la conexion.")
        }
    }

    async executeQuery({query, params}: { query: string, params: [] }): Promise<Object> {
        const client = await this.getConnection()
        try {
            const queryResult = await (client as PoolClient).query(query, params)
            return queryResult.rows
        } catch (error) {
            console.log(error)
            throw new Error('No se pudo ejecutar la consulta.')
        }finally{
            await this.release(client)
        }
    }

    async release(cnn: PoolClient): Promise<void>{
        try {
            await cnn.release()
        } catch (error) {
            console.log(error)
            throw new Error('No se pudo liberar la conexion.')
        }
    }
}

export const invDB = new dbComponent(db_config)