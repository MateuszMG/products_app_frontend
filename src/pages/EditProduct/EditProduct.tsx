import { Button } from '../../components/global/Button/Button';
import { Form } from '../../components/global/Form/Form';
import { Input } from '../../components/global/inputs/Input/Input';
import { NumberInput } from '../../components/global/inputs/NumberInput/NumberInput';
import { SelectInput } from '../../components/global/inputs/SelectInput/SelectInput';
import { TextareaInput } from '../../components/global/inputs/TextareaInput/Textarea';

import { Container } from './EditProduct.styled';

import { useEditProduct } from './useEditProduct';

export const EditProduct = () => {
  const {
    categoryOptions,
    createInputProps,
    formik,
    handleCategoryChange,
    isError,
    isLoading,
  } = useEditProduct();

  return (
    <Container>
      <h2>Edit product</h2>

      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Input {...createInputProps('name')} />
        <TextareaInput {...createInputProps('description')} />
        <NumberInput {...createInputProps('price')} />
        <NumberInput {...createInputProps('quantity')} />
        <SelectInput
          {...createInputProps('category')}
          onChange={handleCategoryChange}
          options={categoryOptions}
        />
        <Input {...createInputProps('productionDate', 'date')} />

        <Form.ButtonsWrapper>
          <Button isLoading={isLoading} isError={isError} type='reset'>
            Reset
          </Button>
          <Button isLoading={isLoading} isError={isError} type='submit'>
            Submit
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </Container>
  );
};
