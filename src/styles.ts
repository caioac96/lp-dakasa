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
    background-color: #426347;
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