import { Button } from '../../components/global/Button/Button';
import { Form } from '../../components/global/Form/Form';
import { Input } from '../../components/global/inputs/Input/Input';
import { NumberInput } from '../../components/global/inputs/NumberInput/NumberInput';
import { SelectInput } from '../../components/global/inputs/SelectInput/SelectInput';
import { TextareaInput } from '../../components/global/inputs/TextareaInput/Textarea';

import { Container } from './AddProduct.styled';

import { useAddProduct } from './useAddProduct';

export const AddProduct = () => {
  const {
    categoryOptions,
    createInputProps,
    formik,
    handleCategoryChange,
    isError,
    isLoading,
  } = useAddProduct();

  return (
    <Container>
      <h2>Add product</h2>

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
          <Button isError={isError} isLoading={isLoading} type='reset'>
            Reset
          </Button>
          <Button
            isError={isError}
            isLoading={isLoading}
            testId='button__submit'
            type='submit'
          >
            Submit
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </Container>
  );
};
