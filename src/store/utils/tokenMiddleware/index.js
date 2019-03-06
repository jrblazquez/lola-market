const tokenMiddleware = store => next => (action) => {
  const { token } = store.getState().user;
  const { payload } = action;

  if (payload && typeof payload.token === 'undefined') {
    payload.token = token;
  }
  const newAction = Object.assign({}, action, { payload });
  return next(newAction);
};

export default tokenMiddleware;
