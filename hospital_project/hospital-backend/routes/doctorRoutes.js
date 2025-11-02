import express from 'express';
import * as ctrl from '../controllers/doctorController.js';
const router = express.Router();
router.post('/', ctrl.createDoctor);
router.get('/', ctrl.getDoctors);
router.put('/:id', ctrl.updateDoctor);
router.delete('/:id', ctrl.deleteDoctor);
export default router;
