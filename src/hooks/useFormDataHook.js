import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUserFormDataSuccess } from '../store/duck/user/reducer';
import { userSelectors } from '../store/duck/user';

export const useUserFormDataHook = () => {
  const [form, setForm] = useState({});
  const formData = useSelector(userSelectors.getUserForm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserFormDataSuccess(form));
  }, [form]);

  return {
    formData,
    setForm,
  };
};
