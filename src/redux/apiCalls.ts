import { destroyCookie, parseCookies, setCookie } from "nookies";
import { publicRequest, userRequest } from "../services/api";
import { loginStart, loginSuccess, loginFailure, logoutSuccess, logoutStart, logoutFailure, } from "./userRedux";
import { createUserStart, createUserSuccess, createUserFailure, } from './userRedux';
import { createProductStart, createProductSuccess, createProductFailure, getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, } from "./productRedux";

// USERS
export const createUser = async (user: any, dispatch: (arg0: { payload: any; type: string; }) => void) => {

  dispatch(createUserStart());

  try {
    const response = await userRequest.post('/auth/register', user);
    console.log(response)
    dispatch(createUserSuccess(response.data));
  } catch (error: any) {
    console.log("Deu error: " + error.response.data)
    dispatch(createUserFailure());
  }
}

export const login = async (dispatch: (arg0: { payload: any; type: string; }) => void, user: any) => {

  dispatch(loginStart());

  try {
    const response = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(response.data))

    const accessToken = response.data.accessToken;
    const isAdmin = response.data.isAdmin;

    setCookie(null, 'TOKEN', accessToken, {
      maxAge: 86400,
      path: '/'
    });

    setCookie(null, 'ADMIN', isAdmin, {
      maxAge: 86400,
      path: '/'
    });

    window.location.href = '/';

  } catch (error) {
    dispatch(loginFailure());
  }
}


export const logout = async (dispatch: ((arg0: { payload: undefined; type: string; }) => void)) => {

  dispatch(logoutStart());

  try {

    const cookies = parseCookies();
    const { ADMIN, TOKEN } = cookies;

    destroyCookie(null, 'TOKEN', TOKEN);
    destroyCookie(null, 'ADMIN', ADMIN);

    dispatch(logoutSuccess())

    window.location.href = '/login';

  } catch (error) {
    dispatch(logoutFailure());
  }
}

// PRODUCTS
export const getProducts = async (dispatch: (arg0: { payload: any; type: string; }) => void) => {

  dispatch(getProductStart());

  try {
    const response = await publicRequest.get('/products');
    dispatch(getProductSuccess(response.data));

  } catch (error) {
    dispatch(getProductFailure());
  }
}

export const deleteProduct = async (id: any, dispatch: (arg0: { payload: any; type: string; }) => void) => {

  dispatch(deleteProductStart());

  try {
    const response = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
}

export const updateProduct = async (id: any, product: any, dispatch: (arg0: { payload: any; type: string; }) => void) => {

  dispatch(updateProductStart());

  await userRequest.put(`/products/${id}`, product);

  try {
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
}

export const createProduct = async (product: any, dispatch: (arg0: { payload: any; type: string; }) => void) => {

  dispatch(createProductStart());

  const response = await userRequest.post('/products', product);
  try {
    dispatch(createProductSuccess(response.data));
  } catch (error) {
    dispatch(createProductFailure());
  }
}
