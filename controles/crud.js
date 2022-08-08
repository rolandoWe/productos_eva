
const conexion=require('../database/db');

exports.save=(req,res)=>{
    const codigo=req.body.codigo;
    const descripcion=req.body.descripcion;
    const precio=req.body.precio;
    // console.log(user+" - "+rol)
    conexion.query('INSERT INTO productos SET ?',{codigo:codigo,descripcion:descripcion,precio:precio},(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
}

exports.update = (req,res)=>{
    const id=req.body.id;
    const codigo=req.body.codigo;
    const descripcion=req.body.descripcion;
    const precio=req.body.precio;
    conexion.query('UPDATE productos SET ? WHERE id = ?',[{codigo:codigo, descripcion:descripcion,precio:precio}, id], (error, results)=>{
    if(error){
        console.log(error)
    }else{
        res.redirect('/')
    }
})
}