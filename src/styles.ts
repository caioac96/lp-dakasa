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
    box-shadow: 0px 0px 61px 12px #111111;
    margin: 0;
    padding-top: 8px;
    position: relative;
    z-index: 1;
`;

export const ContainerLogo = styled.div`
    height: 80%;
    .logo-div {
        height: 100px;
    }
`;

export const ContainerIconsHeader = styled.div`
    position: absolute;
    height: 30px;
    width: 30px;
    top: 20px;
    right: 30px;
    cursor: pointer;
`;

export const Footer = styled.div`
    width: 100%;
    height: 400px;
    background-color: #426369;
    display: flex;
    padding: 40px;
    justify-content: center;
    box-shadow: 0px 0px 80px 1px #111111;
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
    margin-bottom: 10px;
    margin-top: 20px;
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