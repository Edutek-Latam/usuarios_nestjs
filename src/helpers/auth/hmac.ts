import { BadRequestException } from '@nestjs/common';
import {  createHmac } from 'crypto'

export function Hmac(hash:string,body){
    const fecha = new Date().toISOString()
    const fechaReq = fecha

    const timeDiff = Math.floor(new Date().getTime()/10000) - Math.floor(new Date(fechaReq).getTime()/1000);
    if(timeDiff>=300 || timeDiff * -1 >300){
        //throw new BadRequestException()
    }
    //${fecha}
    const payload = JSON.stringify(body);
    const hmac  = createHmac('sha512','Its9PSEsKMmceEt4bh2bQgTPbqe8RD')
        .update(`${payload}`)
        .digest('base64');

    console.log(hmac);
    if(hash === hmac){
        return true
    }else{return false}

}