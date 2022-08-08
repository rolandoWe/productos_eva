
const mysql= require('mysql');

const conexion=mysql.createConnection({
    host:'sql107.epizy.com',
    user:'epiz_31522942',
    password:'PakicSMSACr',
    database:'epiz_31522942_productos_eva'
    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'productos_eva'
})

conexion.connect((error)=>{
    if(error){
        console.error('Erorr de conexion es: '+ error);
        return
    }
    console.log('Conectado a la BD MysQl')
})

module.exports=conexion;