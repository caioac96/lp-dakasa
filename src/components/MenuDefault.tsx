import { Typography } from "antd";
import { MenuContainer } from "./styles";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MenuDefault() {
    return (
        <MenuContainer>
            <Typography.Link onClick={() => {}}>Início</Typography.Link>
            <Typography.Link onClick={() => {}}>Sobre</Typography.Link>
            <Typography.Link onClick={() => {}}>Contato</Typography.Link>
            <Typography.Link onClick={() => {}}>Onde estamos <FaMapMarkerAlt size={16} /></Typography.Link>
        </MenuContainer>
    )
}