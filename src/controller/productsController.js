import productModel from '../model/productsModel.js';
import errorResponse from '../validationAndErrors/errorResponse.js';

const getAllProducts = async (req, res) => {
  try {
    const [data] = await productModel.getAllProducts();
    res.send({ message: 'success', data });
  } catch (error) {
    res.status(500).send({ message: 'failed', data: error.message });
    // errorResponse.notAcceptableError(res, error);
  }
};

export default { getAllProducts };
