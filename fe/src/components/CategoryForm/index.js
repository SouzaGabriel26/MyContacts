import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';
import Input from '../Input';

import { CategoriesForm, ButtonContainer, FormGroup } from './styles';
import Spinner from '../Spinner';
import useCategoryForm from './useCategoryForm';

const CategoryForm = forwardRef(({ buttonLabel, onSubmit, isLoading }, ref) => {
  const {
    handleSubmit,
    categoryName,
    setCategoryName,
    isSubmitting,
    isCategoryNameInputInvalid,
  } = useCategoryForm(onSubmit, ref);

  return (
    <CategoriesForm onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          value={categoryName}
          required
          placeholder="Digite o nome da categoria"
          onChange={(e) => setCategoryName(e.target.value)}
          disabled={isSubmitting}
        />
        {isLoading && <Spinner size={16} />}
      </FormGroup>

      <ButtonContainer>
        <Button
          isLoading={isLoading}
          disabled={isCategoryNameInputInvalid || isSubmitting}
          type="submit"
        >
          { buttonLabel }
        </Button>
      </ButtonContainer>
    </CategoriesForm>
  );
});

export default CategoryForm;

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
