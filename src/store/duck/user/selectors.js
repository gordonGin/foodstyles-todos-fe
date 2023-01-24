const getUserForm = (state = {}) => {
  return state.userFormData;
};

const getIsUserAuthenticated = ({ user } = {}) => {
  return user.isAuthenticated;
};

const getIsLoading = ({ user } = {}) => {
  return user.isLoading;
};

export default {
  getUserForm,
  getIsUserAuthenticated,
  getIsLoading,
};
