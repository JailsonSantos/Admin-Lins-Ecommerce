import { createSlice } from '@reduxjs/toolkit';


export interface SliceState {
  products: {
    _id: string;
    title: string;
    description: string;
    img: string;
    categories: string[];
    size: string[];
    color: string[];
    price: number;
    inStock: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  isFetching: boolean;
  error: boolean;
}

const initialState: SliceState = {
  products: [
    {
      _id: '',
      title: '',
      description: '',
      img: '',
      categories: [],
      size: [],
      color: [],
      price: 0,
      inStock: true,
      createdAt: '',
      updatedAt: '',
    }
  ],
  isFetching: false,
  error: false,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      state.error = false;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELELE ONE PRODUCT
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      )
      state.error = false;
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE ONE PRODUCT
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product;
      state.error = false;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // CREATE ONE PRODUCT
    createProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
      state.error = false;
    },
    createProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const {
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
} = productSlice.actions;

export default productSlice.reducer;