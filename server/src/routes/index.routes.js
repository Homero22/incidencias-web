import {Router} from 'express';
import pruebaRoutes from "../routes/p/p.routes.js"


const router = Router();


router.use('/prueba', pruebaRoutes);

export default router;

