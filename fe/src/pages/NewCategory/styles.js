import styled from 'styled-components';

export const TitleLabel = styled.h3`
  margin-bottom: 16px;
`;

export const CategoriesList = styled.ul`
  max-height: 400px;
  overflow-y: scroll;

  padding: 16px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;


  ::-webkit-scrollbar {
    width: 0.6rem;
}

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

`;

export const CategoryCard = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;

  .actions {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: none;
        margin-left: 8px;
      }
  }
`;
