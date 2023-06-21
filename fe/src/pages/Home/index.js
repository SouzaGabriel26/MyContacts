/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../components/Loader/index';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import useHome from './useHome';

import InputSearch from './components/InputSearch';

export default function Home() {
  const {
    isLoading,
    contactBeingDeleted,
    isDeleteModalVisible,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    orderBy,
    hasError,
    searchTerm,
    handleChangeSearchTerm,
    filteredContacts,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {(contacts.length > 0 && !hasError) && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
      }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}

        <Link to="/newContact">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>

          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />

              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong>
                à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {
            (contacts.length > 0 && filteredContacts.length < 1) && (
              <SearchNotFoundContainer>
                <img src={magnifierQuestion} alt="Magnifier question" />
                <span>
                  Nenhum contato encontrado para
                  <strong> &ldquo;{searchTerm}&rdquo;</strong>
                </span>
              </SearchNotFoundContainer>
            )
          }

          {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="arrow icon" />
            </button>
          </ListHeader>
          )}

          {
          filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {
                    contact.category.name
                    && (
                      <small>{contact.category.name}</small>
                    )
                  }
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/editContact/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>

                <button
                  onClick={() => handleDeleteContact(contact)}
                  type="button"
                >
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))
          }
          <Modal
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
            danger
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}

    </Container>
  );
}
