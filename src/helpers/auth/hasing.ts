import * as bcrypt from 'bcrypt'
const saltRound = 10;

export function createHash(password: string){
    const salt = bcrypt.genSaltSync(10);
    //abc123!abc1344asdasd
    const hash = bcrypt.hashSync(password,salt);
    return hash
}

/**
 * 
 * @param { string }  password - password del usuario
 * @param { string }   dbPassword - password alamcenado en la base de datos
 */
export function compare(password: string, dbPassword:string){
    const valid = bcrypt.compareSync(password, dbPassword);

    return valid;
}