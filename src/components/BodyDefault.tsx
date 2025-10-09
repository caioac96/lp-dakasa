import { Image, Typography } from "antd";
import InstagramCarousel from "./InstagramCarousel";
import { Body, CardBody, ContainerImageVitrine, Faixa1, Faixa2 } from "./styles";
import bodyImage1 from "../assets/image/pexels-olga-chursina-587683405-33052931.jpg";
import bodyImage2 from "../assets/image/pexels-alisa-foxy-3585523-17145040.jpg";
import bodyImage3 from "../assets/image/plate-10877.jpg";

export default function BodyDefault() {
    return (
        <Body>
            <ContainerImageVitrine>
                <CardBody>
                    <Typography.Title level={2}>
                        Uma loja com ampla variedade de utensílios e decorações que vão deixar sua casa mais bonita e tornar seu dia a dia mais prático!
                    </Typography.Title>
                </CardBody>
                <Faixa1></Faixa1>
                <Faixa2></Faixa2>
                <Image preview={false} className="img-div-2" src={bodyImage2}></Image>
                <Image preview={false} className="img-div" src={bodyImage1}></Image>
                <Image preview={false} className="img-div-3" src={bodyImage3}></Image>
            </ContainerImageVitrine>
            <InstagramCarousel />
        </Body>
    )
}