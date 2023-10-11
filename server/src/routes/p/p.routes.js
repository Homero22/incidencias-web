import {Router} from 'express';
import routesPrueba from "../../controllers/p.controller.js"


const router = Router();

router.get('/', routesPrueba.getPruebas);

export default router;