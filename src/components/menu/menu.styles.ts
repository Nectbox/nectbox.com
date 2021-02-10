import styled from '@emotion/styled';

export const List = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(4.6rem);
  border-radius: 0.8rem;
  width: 100%;
  min-width: 450px;
  background: #e2e8f0;
  padding: 1.6rem 1.8rem;
  box-shadow: 0 8px 20px 0 #4a556826;
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
  background: #edf2f7;
  border-radius: 0.8rem;
  margin-bottom: 1.25rem;
  padding: 0.9rem 1.45rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: 150ms ease-in;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: #1a202c;
    color: #f7fafc;

    p {
      color: #f7fafc;
    }
  }

  p {
    font-size: 2.1rem;
    font-weight: 500;
    color: #1a202c;
    margin-bottom: 0.45rem;
  }

  small {
    display: flex;
    font-size: 1.45rem;
    flex-grow: 1;
  }
`;
