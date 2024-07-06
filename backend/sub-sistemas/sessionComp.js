import session from 'express-session';

export class SessionComp{
    constructor(config){
        this.config = config;
    }

    getSession(){
        return session(this.config);
    }

    async createSession(req){
        const {body, session} = req;
        for(let key in body){
            session[key] = body[key];
            console.log(`creare sesion con ${session[key]}`);
        }
        return new Promise((resolve, reject) => {
            session.save(err => {
                if(err) {
                    console.error('Error al guardar la sesión:', err);
                    reject(err);
                } else {
                    console.log('Sesión guardada con éxito');
                    resolve();
                }
            });
        });
    }

    verifySession(req){
        return req.session && req.session.username ? true : false 
    }

   async closeSession(req, res) {
    try {
        await new Promise((resolve, reject) => {
            req.session.destroy(err => {
                if (err) {
                    console.error(err);
                    reject(new Error('Error al cerrar la sesión'));
                } else {
                    resolve();
                }
            });
        });
        res.clearCookie('connect.sid');
        return { mensaje: 'Sesión cerrada con éxito' };
    } catch (err) {
        console.error(err);
        return { mensaje: err.message };
    }
  }
}