import React from 'react';
import  styled from 'styled-components';
import logoRed from '../../assets/img/logo_red.png'


const HeaderWrap = styled.header`
    background: url(${logoRed}) no-repeat center;
    background-size: contain;
    width: 66.13%;
    height: 271px;
`;
// The Header Image style with css. Image used for Login and Sign Up
const RitHeader = () => <HeaderWrap />

export default RitHeader;