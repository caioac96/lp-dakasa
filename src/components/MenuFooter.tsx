import { Typography } from "antd";
import { MenuFooterContainer } from "./styles";

export default function MenuFooter() {
    return (
        <MenuFooterContainer>
            <Typography.Link onClick={() => window.location.reload()}>Início</Typography.Link>
            <Typography.Link onClick={() => {}}>Contato</Typography.Link>
        </MenuFooterContainer>
    )
}