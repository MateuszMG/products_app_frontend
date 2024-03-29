import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { axiosInstance } from '../../utils/baseAxios';
import { errorToast } from '../../utils/toast/errorToast';
import {
  AddProductSchema,
  EditProductSchema,
} from '../../utils/validations/productValidation';

export const getProductsAsync = createAsyncThunk<Product[]>(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/api/products`);

      return res.data.products;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

export const getProductAsync = createAsyncThunk<Product, string>(
  'products/getProduct',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/api/product`, { params: { id } });

      return res.data.product;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

export const addProductAsync = createAsyncThunk<Product, AddProductSchema>(
  'products/addProduct',
  async (product: AddProductSchema, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/api/product`, product);

      toast.success('Product added successfully', {
        toastId: 'toast__addProduct',
      });
      return res.data.newProduct;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

export const editProductAsync = createAsyncThunk<Product, EditProductSchema>(
  'products/editProduct',
  async (product: EditProductSchema, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/api/product`, product);

      toast.success('Product edited successfully');
      return res.data.updatedProduct;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

export const deleteProductAsync = createAsyncThunk<{ id: string }, string>(
  'products/deleteProduct',
  async (id: string, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/api/product`, {
        params: { id },
      });

      toast.success('Product deleted successfully');
      return { id } as any;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);
