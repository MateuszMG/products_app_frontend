import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModal } from '../../hooks/useModal';

import { paths } from '../../routes/paths';

import {
  deleteProductAsync,
  getProductsAsync,
} from '../../redux/products/productActions';
import { setSelectedProduct } from '../../redux/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useProducts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const productModal = useModal();
  const [openedProduct, setOpenedProduct] = useState<Product>();

  const { loading, products } = useAppSelector().products;

  const redirectToAddProductPage = () => {
    navigate(paths.addProduct);
  };

  const redirectToEditProductPage = (product: Product) => {
    dispatch(setSelectedProduct(product));
    navigate(paths.editProduct(product.id));
  };

  const handleOpenProduct = (product: Product) => {
    setOpenedProduct(product);
    productModal.handleOpen();
  };

  const deleteProduct = (id: string) => {
    dispatch(deleteProductAsync(id));
  };

  useEffect(() => {
    !products.length && dispatch(getProductsAsync());
  }, []);

  return {
    deleteProduct,
    handleOpenProduct,
    loading,
    openedProduct,
    productModal,
    products,
    redirectToAddProductPage,
    redirectToEditProductPage,
  };
};
