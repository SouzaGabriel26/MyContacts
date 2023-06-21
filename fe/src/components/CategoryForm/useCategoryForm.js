import { useImperativeHandle, useState } from 'react';

export default function useCategoryForm(onSubmit, ref) {
  const [categoryName, setCategoryName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCategoryNameInputInvalid = categoryName === '';

  useImperativeHandle(ref, () => ({
    setCategoryField: (category) => {
      setCategoryName(category.name);
    },
    resetCategoryField: () => {
      setCategoryName('');
    },
  }), []);

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({ categoryName });

    setIsSubmitting(false);
  }

  return {
    handleSubmit,
    categoryName,
    setCategoryName,
    isSubmitting,
    isCategoryNameInputInvalid,
  };
}
