import { setCookie } from "nookies";
import { publicRequest, userRequest } from "../services/api";

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "./userRedux";

import {
  createProductStart,
  createProductSuccess,
  createProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "./productRedux";

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