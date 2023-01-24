import PropTypes from 'prop-types';
import Button from '../base/Button';
import React from 'react';

const Login = ({ formData = {}, setFormData, handleSubmit, setIsLogin }) => {
  const { password, email } = formData;

  return (
    <form className={'form__container'} onSubmit={handleSubmit}>
      <input
        className={'form__input'}
        type='email'
        placeholder='Email'
        value={email}
        onChange={({ target }) => setFormData('email', target.value)}
      />
      <input
        className={'form__input'}
        type='password'
        placeholder='Password'
        value={password}
        onChange={({ target }) => setFormData('password', target.value)}
      />
      <div className={'form__account-selection'} onClick={() => setIsLogin()}>
        Don’t have an account? Sign up.
      </div>

      <Button type='submit' text={'Login'} />
    </form>
  );
};

Login.propTypes = {
  formData: PropTypes.shape({
    password: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  setFormData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setIsLogin: PropTypes.func,
};
export default Login;
