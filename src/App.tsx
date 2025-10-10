import { Image, Layout, Typography } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyDefault from "./components/BodyDefault";
import { ContainerIconsHeader, ContainerLogo, Faixa2, Footer, Header, HomeContainer, Signature } from "./styles";
import logo from "./assets/logobranca.png";
import MenuDefault from "./components/MenuDefault";
import { GrInstagram } from "react-icons/gr";
import MenuFooter from "./components/MenuFooter";

const { Content } = Layout;

export default function App() {
  const handleClick = () => {
    window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
  };

  return (
    <Layout >
      <Content>
        <HomeContainer>
          <Header>
            <ContainerIconsHeader>
              <Typography.Link onClick={handleClick} style={{ color: "#ffffff" }}>
                <GrInstagram size={20} />
              </Typography.Link>
            </ContainerIconsHeader>
            <ContainerLogo>
              <Image preview={false} className="logo-div" src={logo}></Image>
            </ContainerLogo>
            <MenuDefault />
          </Header>
          <Router>
            <Routes>
              <Route path="/" element={<BodyDefault />} />
            </Routes>
          </Router>
          <Footer>
            <div className="div-inside-news">
              <Typography.Title>Da Kasa</Typography.Title>
              <Typography.Text>Porcelanas e presentes</Typography.Text>
              <Typography.Title level={4}>Mais de 25 anos de tradição!</Typography.Title>
              <div style={{ marginTop: "15px" }} />
              <Typography.Text>Rodovia BR 277 - Km 121 (Curitiba/Ponta Grossa) - Número 719 </Typography.Text>
              <div style={{ marginTop: "5px" }} />
              <Typography.Text>Campo Largo/Paraná</Typography.Text>
              <MenuFooter />
              <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                <Faixa2 />
              </div>
              <Signature>
                <Typography.Text>Da Kasa © Copyright 2025</Typography.Text>
                <Typography.Text>desenvolvido por <b>Nuvyn</b></Typography.Text>
              </Signature>
            </div>
          </Footer>
        </HomeContainer>
      </Content>
    </Layout>
  );
}