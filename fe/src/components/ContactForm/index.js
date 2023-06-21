import PropTypes from 'prop-types';

import { Link } from 'react-router-dom/';
import { forwardRef } from 'react';

import { Form, ButtonContainer, CategoryLinkContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import useContactForm from './useContactForm';

const ContactForm = forwardRef(({ buttonLabel, onSubmit, hasCreateCategoryLink }, ref) => {
  const {
    handleSubmit,
    getErrorMessageByFieldName,
    name,
    handleNameChange,
    isSubmitting,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          type="text"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {
            categories && categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </Select>
      </FormGroup>

      {
        hasCreateCategoryLink && (
          <CategoryLinkContainer>
            <Link to="/newCategory">
              <strong>Gerenciar categorias</strong>
            </Link>
          </CategoryLinkContainer>
        )
      }

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}

        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  hasCreateCategoryLink: PropTypes.bool,
};

ContactForm.defaultProps = {
  hasCreateCategoryLink: false,
};

export default ContactForm;
