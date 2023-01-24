import React from 'react';
import PropTypes from 'prop-types';
import Button from '../base/Button';

const Register = ({
  formData = {},
  setFormData = () => {},
  handleSubmit,
  setIsLogin,
}) => {
  const { password, email, name } = formData;

  return (
    <form className={'form__container'} onSubmit={handleSubmit}>
      <input
        className={'form__input'}
        type='text'
        placeholder='Name'
        value={name}
        onChange={({ target }) => setFormData('name', target.value)}
      />
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
        minLength='7'
        value={password}
        onChange={({ target }) => setFormData('password', target.value)}
      />
      <div className={'form__account-selection'} onClick={() => setIsLogin()}>
        Do have an account? Sign in.
      </div>
      <Button type='submit' text={'Sign up'} />
    </form>
  );
};

Register.propTypes = {
  formData: PropTypes.shape({
    password: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  setFormData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setIsLogin: PropTypes.func,
};

export default Register;
