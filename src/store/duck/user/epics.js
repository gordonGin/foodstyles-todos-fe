import User from '../../../api/user';
import { setIsAuthenticated, setLoader } from './reducer';

const registerUser = () => {
  return async (dispatch, getState) => {
    const { userFormData } = getState().user;
    dispatch(setLoader(true));

    try {
      const { token } = await User.createUser(userFormData);
      if (token) {
        localStorage.setItem('token', token);
        dispatch(setIsAuthenticated(true));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoader(false));
    }
  };
};

const loginUser = () => {
  return async (dispatch, getState) => {
    const { userFormData } = getState().user;
    dispatch(setLoader(true));

    try {
      const { token } = await User.signin(userFormData);
      if (token) {
        localStorage.setItem('token', token);
        dispatch(setIsAuthenticated(true));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoader(false);
    }
  };
};
export default { registerUser, loginUser };
