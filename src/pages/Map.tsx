import { Typography } from "antd";
import { MapDiv } from "../components/styles";
import MapEmbed from "../components/MapEmbed";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
    return (
        <MapDiv>
            <Typography.Title level={1}>Nosso endereço <FaMapMarkerAlt size={26} /></Typography.Title>
            <MapEmbed />
        </MapDiv>
    )
}