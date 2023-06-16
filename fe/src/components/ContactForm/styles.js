import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export const CategoryLinkContainer = styled.div`
  text-align: end;
  margin-top: 8px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light}
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary.dark}
    }
  }
`;
