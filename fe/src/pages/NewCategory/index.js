import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

import Modal from '../../components/Modal';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';

import {
  TitleLabel,
  CategoryCard,
  CategoriesList,
} from './styles';
import CategoryForm from '../../components/CategoryForm';

function NewCategory() {
  const [categories, setCategories] = useState();
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState();

  const categoryFormRef = useRef(null);

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

  async function handleCategorySubmit({ categoryName }) {
    try {
      const categoryObj = {
        name: categoryName,
      };

      const newCategory = await CategoriesService.createCategory(categoryObj);

      categoryFormRef.current.resetCategoryField();

      setCategories((prevState) => ([...prevState, newCategory]));

      toast({
        type: 'success',
        text: 'Categoria cadastrada com sucesso',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Erro ao cadastrar a categoria',
      });
    }
  }

  function handleDeleteCategory(category) {
    setIsDeleteModalVisible(true);
    setCategoryBeingDeleted(category);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setCategoryBeingDeleted(null);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);

      await CategoriesService.deleteCategory(categoryBeingDeleted.id);

      setCategories((prevState) => prevState.filter(
        (category) => category.id !== categoryBeingDeleted.id,
      ));

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Categoria deletada com sucesso!',
      });
    } catch (err) {
      if (err.body.constraint === 'contacts_category_id_fkey') {
        toast({
          type: 'danger',
          text: 'Essa categoria não pode ser excluída porque está vinculada a um ou mais usuários.',
        });
      } else {
        toast({
          type: 'danger',
          text: 'Ocorreu um erro ao deletar a categoria!',
        });
      }
    } finally {
      setIsLoadingDelete(false);
      handleCloseDeleteModal();
    }
  }

  return (
    <>

      <Loader isLoading={isLoadingCategories} />

      <Modal
        title={`Tem certeza que deseja remover o contato "${categoryBeingDeleted?.name}"?`}
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        danger
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      <PageHeader title="Nova categoria" />

      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleCategorySubmit}
        isLoading={isLoadingCategories}
      />

      {!isLoadingCategories && (
      <TitleLabel>
        Lista de Categorias (
          {categories.length > 0 ? categories.length : null}
        ):
      </TitleLabel>
      )}

      <CategoriesList>
        {
            categories && (
              categories.map((category) => (
                <CategoryCard key={category.id}>
                  <div className="info">
                    <strong>{category.name}</strong>
                  </div>

                  <div className="actions">
                    <Link to={`/editCategory/${category.id}`}>
                      <img src={edit} alt="Edit" />
                    </Link>

                    <button
                      onClick={() => handleDeleteCategory(category)}
                      type="button"
                    >
                      <img src={trash} alt="Delete" />
                    </button>
                  </div>
                </CategoryCard>
              ))
            )
          }
      </CategoriesList>
    </>
  );
}

export default NewCategory;
