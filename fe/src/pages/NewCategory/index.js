import { Link } from 'react-router-dom';

import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

import Modal from '../../components/Modal';
import PageHeader from '../../components/PageHeader';

import {
  TitleLabel,
  CategoryCard,
  CategoriesList,
} from './styles';
import CategoryForm from '../../components/CategoryForm';
import useNewCategory from './useNewCategory';

function NewCategory() {
  const {
    categoryBeingDeleted,
    isDeleteModalVisible,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    categoryFormRef,
    handleCategorySubmit,
    isLoadingCategories,
    categories,
    handleDeleteCategory,
  } = useNewCategory();

  return (
    <>

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

      <PageHeader title="Nova categoria" pathToReturn="/newContact" />

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

      { !isLoadingCategories && (
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
      )}

    </>
  );
}

export default NewCategory;
