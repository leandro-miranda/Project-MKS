import { AppDispatch } from './index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../interfaces/IProduct';
import axios from 'axios';


const cart = createSlice({
  name: 'cart',
  initialState: {
    counter: 0,
    cartOpen: 'none',
    products: [],
    productsSelected: [] as IProduct[],
  },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    openCart(state) {
      state.cartOpen = 'flex';
    },
    closeCart(state) {
      state.cartOpen = 'none';
    },
    getProducts(state, action: PayloadAction<never[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.productsSelected = [...state.productsSelected, action.payload];
    },
    addMoreProduct(state, action: PayloadAction<IProduct[]>) {
      state.productsSelected = action.payload;
    },
    removeProduct(state, action: PayloadAction<IProduct[]>) {
      state.productsSelected = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  openCart,
  closeCart,
  getProducts,
  addProduct,
  addMoreProduct,
  removeProduct,
} = cart.actions;

export default cart.reducer;

export function getProductsAsync(): any {
  return async function (dispatch: AppDispatch) {
    const { data } = await axios.get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');

    dispatch(getProducts(data.products));
  }
};