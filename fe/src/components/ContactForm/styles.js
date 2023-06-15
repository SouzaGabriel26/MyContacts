import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export const NewCategory = styled.div`
  margin-top: 4px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;

    transition: color 0.2s ease-in-out;

    span {
      margin-left: 8px;
      font-size: 28px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
