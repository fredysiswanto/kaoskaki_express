import express from 'express';
import users from '../controller/usersController.js';
const router = express.Router();

router.get('/', users.getAllUsers);
router.post('/', users.createNewUser);
// router.patch('/', users.editUser);
// router.delete('/', users.editUser);

export default router;
