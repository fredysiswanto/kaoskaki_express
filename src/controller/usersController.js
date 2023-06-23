import usersModel from '../model/usersModel.js';
import errorResponse from '../validationAndErrors/errorResponse.js';
const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
    res.send({ message: 'success', data });
  } catch (error) {
    res.status(500).send({ message: 'failed', data: error.message });
    // errorResponse.notAcceptableError(res, error);
  }
};
const createNewUser = async (req, res) => {
  const paylaod = req.body;
  if (!paylaod.name || !paylaod.address) {
    errorResponse.badRequestError(res, 'mohon check data anda');
  }
  try {
    await usersModel.addNewUser(req.body);
    res.send({ message: 'success edit data user', data: req.body });
  } catch (error) {
    res.status(500).send({ message: 'failed', data: error.message });
  }
};
const editUser = async (req, res) => {
  try {
    await usersModel.editUser(req.body, req.params.idUser);
    res.send({ message: 'success update data user', data: req.body });
  } catch (error) {
    res.status(500).send({ message: 'failed', data: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await usersModel.deleteUser(req.params.idUser);
    res.send({ message: 'success delete data user' });
  } catch (error) {
    res.status(500).send({ message: 'failed', data: error.message });
  }
};

export default { getAllUsers, createNewUser, editUser, deleteUser };
