import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return <FooterContainer>푸터</FooterContainer>;
};

const FooterContainer = styled.div`
    height: 40vh;
    border-top: 5px solid #fff9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Footer;
