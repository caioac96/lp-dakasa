import styled from "styled-components";

export const MenuContainer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 55px;
    align-items: center;
    text-align: center;
    min-width: 598px;
    background-color: #ffffff;

    * {
        font-size: 20px;
    }
`;

export const Body = styled.main`
    width: 100%;
    min-height: 200vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const ContainerImageVitrine = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    gap: 10px;
    position: relative;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: hidden;

    .ant-image {
        position: unset !important;
    }

    .img-div {
        position: absolute;
        top: -80px;
        left: 0px;
        width: 100%;
        filter: blur(1px);
    }
`;

export const Faixa1 = styled.div`
    height: 1px;
    width: 100%;
    background-color: #42634755;
    margin-bottom: 10px;
    filter: blur(3px);
`;

export const CardBody = styled.div`
    display: none;
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

export const ContainerInstagram = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    margin-bottom: 30px;
`;