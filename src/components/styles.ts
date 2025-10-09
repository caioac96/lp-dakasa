import styled from "styled-components";

export const MenuContainer = styled.div`
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 55px;
    align-items: center;
    text-align: center;
    min-width: 598px;

    * {
        font-size: 20px;
    }
`;

export const Body = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: white;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const ContainerImageVitrine = styled.div`
    width: 80%;
    display: flex;
    gap: 10px;
    position: relative;
    align-items: center;
    align-content: center;
    justify-content: center;
    min-height: 700px;

    .ant-image {
        position: unset !important;
    }
    
    .img-div {
        position: absolute;
        height: 700px;
        width: auto;
        /* border-radius: 18px; */
        filter: blur(1px);
        right: 35%;
        top: 0px;
        z-index: 3;
    }

    .img-div-2 {
        position: absolute;
        height: 700px;
        width: auto;
        /* border-radius: 18px; */
        left: 8%;
        top: 0px;
        filter: blur(1px);
        z-index: 2;
    }

    .img-div-3 {
        position: absolute;
        height: 700px;
        width: auto;
        /* border-radius: 18px; */
        right: 5%;
        top: 0px;
        filter: blur(1px);
        z-index: 1;
    }
`;

export const Faixa1 = styled.div`
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #111111;
    top: 250px;
    filter: blur(3px);
    z-index: 0;
`;

export const Faixa2 = styled.div`
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #111111;
    top: 550px;
    filter: blur(3px);
    z-index: 0;
`;

export const CardBody = styled.div`
    position: absolute;
    width: 600px;
    height: 400px;
    background-color: #d4d6d5;
    border-radius: 5px;
    box-shadow: 6px 12px 111px #111111;
    opacity: 0.95;
    z-index: 4;
    top: 125px;
    left: 30%;
    padding: 60px;
    font-size: 25px !important;
`;