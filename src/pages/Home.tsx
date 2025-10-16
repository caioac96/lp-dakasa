import { Image, Typography } from "antd";
import InstagramCarousel from "../components/InstagramCarousel";
import { Body, ContainerImageVitrine, Faixa1, TextAbout } from "../components/styles";
import bodyImage1 from "../assets/image/pexels-lachlan-ross-5967868.jpg";
import bodyImage2 from "../assets/image/pexels-hannaauramenka-8746961.jpg";
import bodyImage3 from "../assets/image/pexels-rdne-8208337.jpg";

export default function Home() {
    const handleClick = () => {
        window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
    };

    return (
        <Body>
            <ContainerImageVitrine>
                <Image preview={false} className="img-div" src={bodyImage1}></Image>
            </ContainerImageVitrine>
            <Faixa1 />
            <TextAbout>
                <Typography.Text>
                    "Ampla <b>variedade</b> de utensílios e decorações que vão deixar sua casa mais bonita e tornar seu dia a dia mais <b>prático</b>!"
                </Typography.Text>
            </TextAbout>
            <Faixa1 />
            <ContainerImageVitrine>
                <Image preview={false} className="img-div one-i" src={bodyImage2}></Image>
            </ContainerImageVitrine>
            <Typography.Title level={3}>
                Acompanhe nosso <Typography.Link style={{ fontWeight: "bold", textDecoration: "underline" }} onClick={handleClick}>Instagram</Typography.Link>
            </Typography.Title>
            <InstagramCarousel />
            <ContainerImageVitrine>
                <Image preview={false} className="img-div two-i" src={bodyImage3}></Image>
            </ContainerImageVitrine>
        </Body>
    )
}