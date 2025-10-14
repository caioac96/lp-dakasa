import { Typography } from "antd";
import { MenuFooterContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function MenuFooter() {
    const navigate = useNavigate();

    return (
        <MenuFooterContainer>
            <Typography.Link onClick={() => navigate('/')}>Início</Typography.Link>
            <Typography.Link onClick={() => navigate('/contact')}>Contato</Typography.Link>
        </MenuFooterContainer>
    )
}