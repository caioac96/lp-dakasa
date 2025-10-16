import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Header = styled.header`
    align-self: stretch;
    height: 160px;
    background-color: #426369;
    box-shadow: 0px 4px 27px 0px #42636988;
    margin: 0;
    padding-top: 10px;
    position: relative;
    z-index: 1;
`;

export const ContainerLogo = styled.div`
    height: 110px;
    .logo-div {
        height: 100px;
        width: 173px;
    }
`;

export const ContainerLogoFooter = styled.div`
    .logo-div {
        height: 100px;
        width: 173px;
    }
`;

export const ContainerIconsFloating = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    bottom: 70px;
    right: 2%;
    cursor: pointer;
    border-radius: 30px;
    background-color: #25D366;
    z-index: 4;
`;

export const Footer = styled.div`
    width: 100%;
    height: 450px;
    background-color: #426369;
    display: flex;
    padding: 40px;
    justify-content: center;
    box-shadow: 0px 0px 23px 30px #42636988;
    z-index: 1;

    .div-inside-news {
        width: 100%;
        position: relative;

        .ant-typography {
            color: #ffffff !important;
            margin-bottom: 0;
        }
    }
`;

export const Faixa2 = styled.div`
    height: 1px;
    width: 50%;
    display: flex;
    background-color: #ffffff;
    margin-bottom: 30px;
    margin-top: 50px;
    filter: blur(1px);
`;

export const Signature = styled.div`
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;