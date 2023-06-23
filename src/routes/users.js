import express from 'express';
import users from '../controller/usersController.js';
const router = express.Router();

router.get('/', users.getAllUsers);
router.post('/', users.createNewUser);
router.patch('/:idUser', users.editUser);
router.delete('/:idUser', users.deleteUser);

export default router;
