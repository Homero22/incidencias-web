import {Prueba} from '../models/prueba.js';

const getPruebas = async (req, res) => {
    try{
        const pruebas = await Prueba.findAll();
        console.log(pruebas);
        console.log("pruebas")
        res.json({
            data: pruebas
        });
    }catch(error){
        console.error(error);
    }
}

export default {
    getPruebas
}