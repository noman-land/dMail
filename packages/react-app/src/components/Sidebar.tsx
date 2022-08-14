import styled from 'styled-components';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { SIDEBAR_LINKS } from '../constants';

export type SidebarProps = {
  isComposing: boolean;
  setIsComposing: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledSidebar = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 200px;
  flex-direction: column;
  padding: 0 16px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      &:hover:not(:active) {
        background: #ddd;
        filter: brightness(2);
      }

      a {
        color: black;
        display: block;
        padding: 12px 24px;
        text-decoration: none;
      }
    }
  }
`;

export const Sidebar = ({ isComposing, setIsComposing }: SidebarProps) => {
  const handleComposeClick = useCallback(
    () => setIsComposing(c => !c),
    [setIsComposing]
  );
  return (
    <StyledSidebar>
      <button onClick={handleComposeClick}>
        {isComposing ? 'Stop composing' : 'Compose'}
      </button>
      <ul>
        {SIDEBAR_LINKS.map(({ route, text }) => (
          <li key={route}>
            <Link to={`/${route}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};
