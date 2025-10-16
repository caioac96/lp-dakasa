import { Typography } from "antd";
import { MenuContainer } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuDefault() {
    const navigate = useNavigate();
    const location = useLocation();

    const linkStyle = (path: string) => ({
        fontWeight: location.pathname === path ? "bold" : "",
        cursor: "pointer",
        transition: "fontWeight 0.6s ease",
    });

    return (
        <MenuContainer>
            <Typography.Link onClick={() => navigate("/")} style={linkStyle("/")}>Início</Typography.Link>
            <Typography.Link onClick={() => navigate("/about")} style={linkStyle("/about")}>Sobre</Typography.Link>
            <Typography.Link onClick={() => navigate("/contact")} style={linkStyle("/contact")}>Contato</Typography.Link>
        </MenuContainer>
    )
}