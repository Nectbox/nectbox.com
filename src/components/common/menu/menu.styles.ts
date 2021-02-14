import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const List = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(5rem);
  border-radius: 0.8rem;
  width: 100%;
  min-width: 450px;
  background: ${theme.colors.background.gray};
  padding: 1.6rem 1.8rem;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 8px 20px 0 #4a5568; */
`;

export const MenuWrapper = styled.div`
  position: relative;
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover ${List} {
    display: block;
  }
`;

export const MenuItemWrapper = styled.li`
  background: ${theme.colors.background.light};
  border-radius: 0.8rem;
  margin-bottom: 1.4rem;
  padding: 1rem 1.45rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: 150ms ease-in;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: ${theme.colors.background.dark};
    color: ${theme.colors.text.light};
    transform: scale(1.02);

    p {
      color: ${theme.colors.text.light};
    }
  }

  p {
    font-size: 2rem;
    font-weight: 600;
    color: ${theme.colors.text.gray};
    margin-bottom: 0.8rem;
  }

  small {
    display: flex;
    font-size: 1.5rem;
    flex-grow: 1;
  }
`;
