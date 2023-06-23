import express from 'express';
import products from '../controller/productsController.js';
const router = express.Router();

router.get('/', products.getAllproducts);
// router.post('/', users.createNewUser);
// router.patch('/:idUser', users.editUser);
// router.delete('/:idUser', users.deleteUser);

export default router;
