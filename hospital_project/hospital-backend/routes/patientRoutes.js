import express from 'express';
import * as ctrl from '../controllers/patientController.js';
const router = express.Router();
router.post('/', ctrl.createPatient);
router.get('/', ctrl.getPatients);
router.get('/:id', ctrl.getPatient);
router.put('/:id', ctrl.updatePatient);
router.delete('/:id', ctrl.deletePatient);
export default router;
