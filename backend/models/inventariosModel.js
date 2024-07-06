import { iDBComp } from '../components/iDBComp.js';


export class inventarioModel{
    constructor(iDBComp){
        this.iDBComp = iDBComp;
    }

    async getInventarios(){
        const query = `SELECT * FROM inventario`;
        const inventarios = await this.iDBComp.exeQuery({query});
        return inventarios.rows;
    }

    async getInventarioById(id){
        const query = `SELECT * FROM inventario WHERE id = $1`;
        const param = [id];
        const inventario = await this.iDBComp.exeQuery({query, param});
        return inventario;
    }

    async createInventario({nombre, stock, rpo, sede}){
        const { id_producto } = await this.iDBComp.exeQuery({query: `SELECT id_producto FROM productos WHERE nom_producto = $1`, param: [nombre]});
        const { id_sede } = await this.iDBComp.exeQuery({query: `SELECT id_sede FROM sedes WHERE nom_sede = $1`, param: [sede]});
        const query = `INSERT INTO inventario(stock, rpo, id_producto, id_sede) VALUES($1, $2, $3, $4) RETURNING *`;
        const param = [stock, rpo, id_producto, id_sede];
        const inventario = await this.iDBComp.exeQuery({query, param});
        return inventario;
    }

    async updateInventario({id, stock, rpo}){
        // const { id_producto } = await this.iDBComp.exeQuery({query: `SELECT id_producto FROM productos WHERE nom_producto = $1`, param: [nombre]});
        // const { id_sede } = await this.iDBComp.exeQuery({query: `SELECT id_sede FROM sedes WHERE nom_sede = $1`, param: [sede]});
        const query = `UPDATE inventario SET stock = $1, rpo = $2, id_producto = $3, id_sede = $4 WHERE id = $5 RETURNING *`;
        const param = [stock, rpo, id_producto, id_sede, id];
        const inventario = await this.iDBComp.exeQuery({query, param});
        return inventario;
    }

    async deleteInventario(id){
        const query = `DELETE FROM inventario WHERE id = $1`;
        const param = [id];
        const inventario = await this.iDBComp.exeQuery({query, param});
        return inventario;
    }




}