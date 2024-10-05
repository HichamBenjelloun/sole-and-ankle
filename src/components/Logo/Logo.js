import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  flex: 0 1 338px;
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  line-height: 28.18px;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
