import styled from 'styled-components';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { SIDEBAR_LINKS } from '../constants';

export type SidebarProps = {
  composingMessage: (isComposing: boolean) => void;
};

const StyledSidebar = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 200px;
  flex-direction: column;

  & > ul {
    list-style: none;

    & > li a {
      text-decoration: none;
    }
  }
`;

export const Sidebar = ({ composingMessage }: SidebarProps) => {
  const handleComposeClick = useCallback(
    () => composingMessage(true),
    [composingMessage]
  );
  return (
    <StyledSidebar>
      <button onClick={handleComposeClick}>Compose</button>
      <ul className="links">
        {SIDEBAR_LINKS.map(({ route, text }) => (
          <li>
            <Link key={route} to={`/${route}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};
