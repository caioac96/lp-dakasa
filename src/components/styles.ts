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
        font-size: 16px;
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
    min-height: 20vh;
    height: 20vh;
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

    .img-div1 {
        position: absolute;
        width: 100%;
        /* filter: blur(1px); */
        top: -80px;
        left: 0px;
    }

    .img-div2 {
        width: 100%;
        /* filter: blur(1px); */
        margin-top: 110px;
    }

    
    .img-div3 {
        width: 100%;
        /* filter: blur(1px); */
        margin-top: -240px;
    }
`;

export const TextAbout = styled.div`
    height: 40vh;
    width: 30%;
    min-width: 370px;
    text-align: center;
    align-content: center;

    .ant-typography {
        font-size: 30px;
    }
`;

export const Faixa1 = styled.div`
    height: 1px;
    width: 100%;
    background-color: #42634755;
    margin-bottom: 10px;
    margin-top: 20px;
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
    margin-bottom: 30px;
    position: relative;
    justify-content: center;
    width: 90%;
`;

export const ContainerPosts = styled.div`
    display: flex;
    z-index: 0;
    gap: 20px;
`;

export const ButtonDivLeft = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: 1;
    left: 1%;
    box-shadow: 6px 12px 111px #111111;
    background-color: #ffffff88;
    border-radius: 80px;
    top: 200px;
`;

export const ContainerNews = styled.div`
    width: 100%;
    height: 200px;
    background-color: #426347;
    margin-top: 30px;
`;

export const ButtonDivRight = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: 1;
    right: 1%;
    box-shadow: 6px 12px 111px #111111;
    border-radius: 80px;
    background-color: #ffffff88;
    top: 200px
`;