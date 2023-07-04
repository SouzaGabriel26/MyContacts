import { useEffect, useRef, useState } from 'react';

import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function useNewCategory() {
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

  async function handleConfirmDeleteCategory() {
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

  return {
    categoryBeingDeleted,
    isDeleteModalVisible,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteCategory,
    categoryFormRef,
    handleCategorySubmit,
    isLoadingCategories,
    categories,
    handleDeleteCategory,
  };
}
