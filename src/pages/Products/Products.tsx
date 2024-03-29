import {
  AddIcon,
  DeleteIcon,
  EditIcon,
} from '../../components/global/Icon/Icon.styled';
import { Loader } from '../../components/global/Loader/Loader';

import { Header, LoaderWrapper, Name, Row } from './Products.styled';

import { ProductModal } from './ProductModal/ProductModal';
import { useProducts } from './useProducts';

export const Products = () => {
  const {
    deleteProduct,
    handleOpenProduct,
    loading,
    openedProduct,
    productModal,
    products,
    redirectToAddProductPage,
    redirectToEditProductPage,
  } = useProducts();

  return (
    <div>
      <Header>
        <strong>Add product</strong>
        <AddIcon
          data-testid='button__addProduct'
          onClick={redirectToAddProductPage}
        />
      </Header>

      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <div>
          {products.map((product) => (
            <Row key={product.id}>
              <Name onClick={() => handleOpenProduct(product)}>
                {product.name}
              </Name>
              <div>
                <EditIcon onClick={() => redirectToEditProductPage(product)} />
                <DeleteIcon onClick={() => deleteProduct(product.id)} />
              </div>
            </Row>
          ))}
        </div>
      )}

      {productModal.open && openedProduct && (
        <ProductModal {...productModal} product={openedProduct} />
      )}
    </div>
  );
};
