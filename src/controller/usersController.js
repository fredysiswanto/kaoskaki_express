const listUser = [
  {
    id: 1,
    nik: 165323212313,
    name: 'sample name',
    gender: 'male',
    address: 'alamat',
    religion: 'islam',
    maritalStatus: 'merried',
    jobTitle: 'wiraswasta',
    nationality: 'WNI',
    expiredDate: 'Seumur hidup',
    createAt: '2022-05-12',
    updateAt: '2022-05-12',
  },
  {
    id: 2,
    nik: 165323212313,
    name: 'sample name',
    gender: 'male',
    address: 'alamat',
    religion: 'islam',
    maritalStatus: 'merried',
    jobTitle: 'wiraswasta',
    nationality: 'WNI',
    expiredDate: 'Seumur hidup',
    createAt: '2022-05-12',
    updateAt: '2022-05-12',
  },
  {
    id: 3,
    nik: 165323212313,
    name: 'sample name',
    gender: 'male',
    address: 'alamat',
    religion: 'islam',
    maritalStatus: 'merried',
    jobTitle: 'wiraswasta',
    nationality: 'WNI',
    expiredDate: 'Seumur hidup',
    createAt: '2022-05-12',
    updateAt: '2022-05-12',
  },
  {
    id: 4,
    nik: 165323212313,
    name: 'sample name',
    gender: 'male',
    address: 'alamat',
    religion: 'islam',
    maritalStatus: 'merried',
    jobTitle: 'wiraswasta',
    nationality: 'WNI',
    expiredDate: 'Seumur hidup',
    createAt: '2022-05-12',
    updateAt: '2022-05-12',
  },
  {
    id: 5,
    nik: 165323212313,
    name: 'sample name',
    gender: 'male',
    address: 'alamat',
    religion: 'islam',
    maritalStatus: 'merried',
    jobTitle: 'wiraswasta',
    nationality: 'WNI',
    expiredDate: 'Seumur hidup',
    createAt: '2022-05-12',
    updateAt: '2022-05-12',
  },
];

const getAllUsers = (req, res) => {
  const data = { statusCode: 200, message: 'data found', data: listUser };
  res.send(data);
};
const createNewUser = (req, res) => {
  const data = req.body;
  res.send(data);
};

export default { getAllUsers, createNewUser };
