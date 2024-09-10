import produce from "immer";

export const LOGIN_START = "user/loginStart";
export const LOGIN_SUCCESS = "user/loginSuccess";
export const LOGIN_FAILER = "user/loginFailer";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_START:
        draft.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.currentUser = action.payload;
        draft.loading = false;
        draft.error = false;
        break;
      case LOGIN_FAILER:
        draft.loading = false;
        draft.error = action.payload;
        break;

      default:
        break;
    }
  });
};

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILER,
  payload: error,
});

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginStart: (state) =>
//       produce(state, (draft) => {
//         draft.loading = true;
//       }),
//     loginSuccess: (state, action) =>
//       produce(state, (draft) => {
//         draft.currentUser = action.payload;
//         draft.loading = false;
//         draft.error = false;
//       }),
//     loginFailer: (state, action) =>
//       produce(state, (draft) => {
//         draft.error = action.payload;
//         draft.loading = false;
//       }),
//   },
// });

export default userReducer;
