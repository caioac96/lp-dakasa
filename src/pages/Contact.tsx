import { Button, Typography } from "antd";
import { ContactDiv } from "../components/styles";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

export default function Contact() {
    const clickInstagram = () => {
        window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
    };

    const clickWhatsApp = () => {
        window.open("https://wa.me/5541991298850", "_blank");
    };

    return (
        <ContactDiv>
            <Typography.Title level={1}>Entre em contato conosco</Typography.Title>
            <Typography.Text>Será um prazer lhe atender!</Typography.Text>
            <br />
            <div className="div-buttons">
                <Button type="primary" onClick={clickWhatsApp} icon={<IoLogoWhatsapp />}>WhatsApp</Button>
                <Button type="primary" onClick={clickInstagram} icon={<GrInstagram />}>Instagram</Button>
            </div>
        </ContactDiv>
    )
}