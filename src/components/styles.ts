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
    background-color: #ffffff;

    * {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        * {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        gap: 20px;
        * {
            font-size: 14px;
        }
    }
`;

export const MenuFooterContainer = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    text-align: center;
    
    * {
        font-size: 14px;
    }
`;

export const Body = styled.main`
    width: 100%;
    min-height: 170vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const ContainerImageVitrine = styled.div`
    min-height: 21vh;
    height: 22vh;
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
        margin-top: -110px;
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
    background-color: #42636955;
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
    left: 5px;
    box-shadow: 6px 12px 111px #111111;
    background-color: #ffffff88;
    border-radius: 80px;
    top: 200px;
`;

export const ButtonDivRight = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: 1;
    right: 5px;
    box-shadow: 6px 12px 111px #111111;
    border-radius: 80px;
    background-color: #ffffff88;
    top: 200px
`;

export const AboutDiv = styled.div`
    width: 40%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;

    .body-about {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const ContactDiv = styled.div`
    width: 40%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;

    .div-buttons {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;

        * {
            font-size: 18px;
        }
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const MapDiv = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
`;