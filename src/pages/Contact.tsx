import { Button, Typography } from "antd";
import { ContactDiv, MapDiv } from "../components/styles";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import MapEmbed from "../components/MapEmbed";
import { Faixa2 } from "../styles";

export default function Contact() {
    const clickInstagram = () => {
        window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
    };

    const clickWhatsApp = () => {
        window.open("https://wa.me/5541991298850", "_blank");
    };

    return (
        <>
            <ContactDiv>
                <Typography.Title level={1}>Entre em contato</Typography.Title>
                <Typography.Text>Será um prazer lhe atender!</Typography.Text>
                <div className="div-buttons">
                    <Button type="primary" onClick={clickWhatsApp} icon={<IoLogoWhatsapp />}>WhatsApp</Button>
                    <Button type="primary" onClick={clickInstagram} icon={<GrInstagram />}>Instagram</Button>
                </div>
            </ContactDiv>
            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                <Faixa2 style={{ backgroundColor: "#42636988" }} />
            </div>
            <MapDiv>
                <Typography.Title level={1}>Nosso endereço <FaMapMarkerAlt size={26} /></Typography.Title>
                <MapEmbed />
            </MapDiv>
        </>
    )
}