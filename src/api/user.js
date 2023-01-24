import axiosInstance from '../config/api';

const User = {
  createUser: ({ email, password }) => {
    return axiosInstance
      .post(
        `/user`,
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        throw Error(error);
      });
  },
  signin: ({ email, password }) => {
    return axiosInstance
      .post(
        `/signin`,
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        throw Error(error);
      });
  },
};

export default User;
