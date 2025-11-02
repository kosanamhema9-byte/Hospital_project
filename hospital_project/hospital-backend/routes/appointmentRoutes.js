import express from 'express';
import * as ctrl from '../controllers/appointmentController.js';
const router = express.Router();
router.post('/', ctrl.createAppointment);
router.get('/', ctrl.getAppointments);
router.put('/:id', ctrl.updateAppointment);
router.delete('/:id', ctrl.deleteAppointment);
export default router;
