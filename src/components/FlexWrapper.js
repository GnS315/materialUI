import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const FlexWrapper = ({children}) => {
    return <Wrapper>{children}</Wrapper>
};

export default FlexWrapper;