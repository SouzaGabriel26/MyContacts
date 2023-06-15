import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

import Loader from '../../components/Loader';
import Input from '../../components/Input';

import { ListCategories, CategoriesForm, ButtonContainer } from './styles';
import Button from '../../components/Button';

function NewCategory() {
  const [categories, setCategories] = useState();
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  const isCategoryNameInputInvalid = categoryName === '';

  useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoadingCategories(true);
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
        toast({
          type: 'danger',
          text: 'Ocorreu um erro ao solicitar as categorias',
        });
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  async function handleCategorySubmit(e) {
    e.preventDefault();

    try {
      const categoryObj = {
        name: categoryName,
      };

      const newCategory = await CategoriesService.createCategory(categoryObj);

      setCategories((prevState) => ({ ...prevState, newCategory }));

      toast({
        type: 'success',
        text: 'Categoria cadastrada com sucesso',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Erro ao cadastrar a categoria',
      });
    } finally {
      setCategoryName('');
    }
  }

  return (
    <>

      <Loader isLoading={isLoadingCategories} />

      <PageHeader title="Nova categoria" pathToReturn="/newContact" />

      <CategoriesForm onSubmit={handleCategorySubmit}>
        <Input
          value={categoryName}
          required
          placeholder="Digite o nome da categoria"
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <ButtonContainer>
          <Button
            isLoading={isLoadingCategories}
            disabled={isCategoryNameInputInvalid}
            type="submit"
          >
            Cadastrar
          </Button>
        </ButtonContainer>
      </CategoriesForm>

      <ListCategories>

        {!isLoadingCategories && <h3>Lista de Categorias:</h3>}

        <ul>
          {
            categories && (
              categories.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))
            )
          }
        </ul>
      </ListCategories>
    </>
  );
}

export default NewCategory;
