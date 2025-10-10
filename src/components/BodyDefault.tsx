import { Image, Typography } from "antd";
import InstagramCarousel from "./InstagramCarousel";
import { Body, CardBody, ContainerImageVitrine, Faixa1 } from "./styles";
import bodyImage from "../assets/image/pexels-lachlan-ross-5967868.jpg";

export default function BodyDefault() {
    const handleClick = () => {
        window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
    };

    return (
        <Body>
            <ContainerImageVitrine>
                {/* <CardBody>
                    <Typography.Title level={2}>
                        Uma loja com ampla variedade de utensílios e decorações que vão deixar sua casa mais bonita e tornar seu dia a dia mais prático!
                    </Typography.Title>
                </CardBody> */}
                <Image preview={false} className="img-div" src={bodyImage}></Image>
            </ContainerImageVitrine>
            <Typography.Title level={2}>
                Acompanhe nosso <Typography.Link style={{ fontSize: "30px", fontWeight: "bold" }} onClick={handleClick}>Instagram</Typography.Link>
            </Typography.Title>
            <Faixa1></Faixa1>
            <InstagramCarousel />
            <Faixa1></Faixa1>
        </Body>
    )
}