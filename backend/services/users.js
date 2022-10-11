const dbPool = require('../db').pool;
class UserService{
    async getUsers(){
        try{
           const response = await dbPool.query('SELECT * FROM user LIMIT 1;')
           const result = response && response[0] && response[0] ? response[0] : undefined;
           return result;
        }catch(e){
            throw e;
        }
    }
}

module.exports = new UserService()
