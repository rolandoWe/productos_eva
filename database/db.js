
const mysql= require('mysql');

const conexion=mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:''
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