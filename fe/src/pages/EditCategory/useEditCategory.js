import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function useEditCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryFieldName, setCategoryFieldName] = useState('');

  const categoryFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadCategory() {
      try {
        setIsLoading(true);

        const category = await CategoriesService.getCategoryById(id);

        categoryFormRef.current.setCategoryField(category);

        setCategoryFieldName(category.name);
      } catch {
        history.push('/editContact');
        toast({
          type: 'danger',
          text: 'Categoria não encontrada',
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadCategory();
  }, [id, history]);

  async function handleSubmit({ categoryName }) {
    try {
      const categoryObj = {
        id,
        name: categoryName,
      };

      const edittedCategory = await CategoriesService.updateCategory(id, categoryObj);

      setCategoryFieldName(edittedCategory.name);

      toast({
        type: 'success',
        text: 'Categoria editada com sucesso',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Erro ao editar categoria',
      });
    }
  }

  return {
    categoryFieldName,
    categoryFormRef,
    isLoading,
    handleSubmit,
  };
}
