
import { iDBComp } from '../`sub-sistemas/ssDispatcher.js';

export class sedesModel{

    async getSedes(){
        const query = `SELECT * FROM sedes`;
        const sedes = await this.iDBComp.exeQuery({query});
        return sedes.rows;
    }

    async getSedeById(id){
        const query = `SELECT * FROM sedes WHERE id = $1`;
        const param = [id];
        const sede = await this.iDBComp.exeQuery({query, param});
        return sede;
    }

    async createSede({nombre, direccion}){
        const query = `INSERT INTO sedes(nom_sede, direccion) VALUES($1, $2) RETURNING *`;
        const param = [nombre, direccion];
        const sede = await this.iDBComp.exeQuery({query, param});
        return sede;
    }

    async updateSede({id, nombre, direccion}){
        const query = `UPDATE sedes SET nombre_sede = $1, ubicacion = $2 WHERE id = $3 RETURNING *`;
        const param = [nombre, direccion, id];
        const sede = await this.iDBComp.exeQuery({query, param});
        return sede;
    }

    async deleteSede(id){
        const query = `DELETE FROM sedes WHERE id = $1`;
        const param = [id];
        const sede = await this.iDBComp.exeQuery({query, param});
        return sede;
    }
}