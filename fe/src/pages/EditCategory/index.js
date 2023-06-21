import PageHeader from '../../components/PageHeader';
import CategoryForm from '../../components/CategoryForm';
import useEditCategory from './useEditCategory';

function EditCategory() {
  const {
    categoryFieldName,
    categoryFormRef,
    isLoading,
    handleSubmit,
  } = useEditCategory();

  return (
    <>
      <PageHeader title={`Editar ${categoryFieldName}`} pathToReturn="/newCategory" />
      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Salvar Alterações"
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default EditCategory;
