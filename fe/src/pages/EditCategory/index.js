import PageHeader from '../../components/PageHeader';
import CategoryForm from '../../components/CategoryForm';
import useEditCategory from './useEditCategory';
import Loader from '../../components/Loader';

function EditCategory() {
  const {
    categoryFieldName,
    categoryFormRef,
    isLoading,
    handleSubmit,
  } = useEditCategory();

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={
          isLoading
            ? 'Carregando...'
            : `Editar ${categoryFieldName}`
        }
        pathToReturn="/newCategory"
      />

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
