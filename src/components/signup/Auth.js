import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from './Login';
import Register from './Register';
import CheckSign from '../../assets/icons/Check';
import Title from '../Title';
import { useUserFormDataHook } from '../../hooks/useFormDataHook';
import { userOperations, userSelectors } from '../../store/duck/user';
import Loader from '../base/Loader';

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const isAuthenticated = useSelector(userSelectors.getIsUserAuthenticated);
  const isLoading = useSelector(userSelectors.getIsLoading);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const dispatch = useDispatch();
  const { setForm, formData = {} } = useUserFormDataHook();
  const handleSubmit = (event) => {
    event.preventDefault();

    isLogin
      ? dispatch(userOperations.loginUser())
      : dispatch(userOperations.registerUser());
  };
  const _setFormData = (key, value) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <div className={'feature__container'}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`auth__container ${isLogin ? 'login' : 'register'}`}>
          <div>
            <CheckSign />
            <Title title={`${isLogin ? 'Welcome back!' : 'Welcome'} `} />
            <div className={'subtitle'}>
              {`${
                isLogin
                  ? 'Log in to continue'
                  : 'Sign up to start using Simpledo today'
              }`}
            </div>

            {renderSign({
              isSignIn: isLogin,
              formData,
              setFormData: _setFormData,
              handleSubmit,
              setIsLogin: setIsLogin.bind(this),
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const renderSign = ({
  isSignIn,
  formData,
  setFormData,
  handleSubmit,
  setIsLogin,
}) => {
  return isSignIn ? (
    <Login
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      setIsLogin={() => setIsLogin((prevState) => !prevState)}
    />
  ) : (
    <Register
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      setIsLogin={() => setIsLogin((prevState) => !prevState)}
    />
  );
};

export default Auth;
