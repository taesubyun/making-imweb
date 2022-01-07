import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import world from '../asset/image/world.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href=''>im-web</Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href=''>주요 기능</MenuLink>
                <MenuLink href=''>템플릿</MenuLink>
                <MenuLink href=''>고객사례</MenuLink>
                <MenuLink href=''>요금</MenuLink>
                <MenuLink href=''>디자이너 찾기</MenuLink>
                <MenuLink href=''>고객 지원</MenuLink>
                <SubMenu>
                    <LanguageIcon src={world}></LanguageIcon>
                    <MenuLink href=''>내 사이트</MenuLink>
                    <BtnMenu>
                        <LoginBtn>로그인</LoginBtn>
                        <FreeStartBtn>무료 시작하기</FreeStartBtn>
                    </BtnMenu>
                </SubMenu>
            </Menu>
        </Nav>
    );
};

const SubMenu = styled.div`
    display: flex;
    padding: 0 0 0 40px;
`;
const Nav = styled.div`
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #2c6dff;
`;
const Logo = styled.div`
    color: white;
    text-decoration: none;
    font-weight: 830;
    font-size: 3rem;
    font-family: 'Lobster', cursive;
`;
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    curosr: pointer;
    span {
        height: 2px;
        width: 20px;
        background: red;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 800px) {
        display: flex;
    }
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 800px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        trasition: max-height 0.3s ease-in;
    }
`;
const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 0.9rem;
    text-align: center;
    text-decoration: none;
    color: white;
    &:hover {
        color: #fff9;
    }
`;

const LanguageIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 10px 0 0 0;
`;
const BtnMenu = styled.div``;
const LoginBtn = styled.button`
    border: 1px solid #ffff;
    width: 90px;
    height: 45px;
    margin-right: 4px;
    background: none;
    color: #fff9;
    border-radius: 3px;
    cursor: pointer;
`;
const FreeStartBtn = styled.button`
    border: none;
    width: 130px;
    height: 45px;
    margin-left: 4px;
    border-radius: 3px;
    cursor: pointer;
`;
export default Navbar;
