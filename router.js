
const { render } = require('ejs');
const express= require('express');

const router=express.Router();

const conexion=require('./database/db')

router.get('/',(req, res)=>{
    // res.render('index', {results:results});
    conexion.query('SELECT * FROM productos',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results})
        }
    })
})

// CREAR REGISTROS
router.get('/create',(req,res)=>{
    res.render('create')
})
// RUTA PARA EDITAR
router.get('/edit/:id',(req,res)=>{
    const id=req.params.id;
conexion.query('SELECT * FROM productos WHERE id=?',[id],(error,results)=>{
    if(error){
        console.log(error)
    }else{
        res.render('edit',{codigo:results[0]})
    }
});
})
//RUTA PARA ELIMINAR REGISTRO
router.get('/delete/:id',(req,res)=>{
    const id=req.params.id;
conexion.query('DELETE  FROM productos WHERE id = ?', [id], (error, results)=>{
    if(error){
        console.log(error)
    }else{
        res.redirect('/');
    }
});
})

const crud=require('./controles/crud');
router.post('/save',crud.save);
router.post('/update',crud.update);

module.exports=router;