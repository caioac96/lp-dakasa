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
    margin: 0;
    padding: 12px;
    position: relative;
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