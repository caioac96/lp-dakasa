import { Image, Layout, Typography } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContainerIconsHeader, ContainerLogo, ContainerLogoFooter, Faixa2, Footer, Header, HomeContainer, Signature } from "./styles";
import logo from "./assets/logobranca.png";
import MenuDefault from "./components/MenuDefault";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import MenuFooter from "./components/MenuFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Map from "./pages/Map";
import ScrollToTop from "./components/ScrollToTop";

const { Content } = Layout;

export default function App() {
  const clickInstagram = () => {
    window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
  };

  const clickWhatsApp = () => {
    window.open("https://wa.me/5541991298850", "_blank");
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout >
        <Content>
          <HomeContainer>
            <Header>
              <ContainerIconsHeader>
                <Typography.Link onClick={clickWhatsApp} style={{ color: "#ffffff" }}>
                  <IoLogoWhatsapp size={22} />
                </Typography.Link>
                <Typography.Link onClick={clickInstagram} style={{ color: "#ffffff" }}>
                  <GrInstagram size={20} />
                </Typography.Link>
              </ContainerIconsHeader>
              <ContainerLogo>
                <Image preview={false} className="logo-div" src={logo}></Image>
              </ContainerLogo>
              <MenuDefault />
            </Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/map" element={<Map />} />
            </Routes>
            <Footer>
              <div className="div-inside-news">
                <ContainerLogoFooter>
                  <Image preview={false} className="logo-div" src={logo}></Image>
                </ContainerLogoFooter>
                <Typography.Title level={3}>Mais de 25 anos de tradição!</Typography.Title>
                <div style={{ marginTop: "10px" }} />
                <Typography.Text>Rodovia BR 277 - Km 121 (Curitiba/Ponta Grossa) - Número 719 </Typography.Text>
                <div style={{ marginTop: "1px" }} />
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
    </Router>

  );
}