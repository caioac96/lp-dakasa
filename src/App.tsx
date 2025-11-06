import { Image, Layout, Typography } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContainerIconsFloating, ContainerLogo, ContainerLogoFooter, Faixa2, Footer, Header, HomeContainer, Signature } from "./styles";
import logo from "./assets/logobranca.png";
import MenuDefault from "./components/MenuDefault";
import { IoLogoWhatsapp } from "react-icons/io";
import MenuFooter from "./components/MenuFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const { Content } = Layout;

export default function App() {
  const clickWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5541991298850", "_blank");
  };

  const handleClick = () => {
    window.open('https://www.nuvyn.com.br', '_blank');
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout >
        <ContainerIconsFloating onClick={clickWhatsApp}>
          <IoLogoWhatsapp className="icon-wpp" />
        </ContainerIconsFloating>
        <Content>
          <HomeContainer>
            <Header>
              <ContainerLogo>
                <Image preview={false} className="logo-div" src={logo}></Image>
              </ContainerLogo>
              <MenuDefault />
            </Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
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
                  <Faixa2 style={{ marginTop: "20px" }} />
                </div>
                <Signature>
                  <Typography.Text>Todos os direitos reservados © Da Kasa 2025</Typography.Text>
                  <Typography.Text>desenvolvido por <Typography.Link style={{ fontWeight: "bold", textDecoration: "underline" }} onClick={handleClick}>Nuvyn</Typography.Link></Typography.Text>
                </Signature>
              </div>
            </Footer>
          </HomeContainer>
        </Content>
      </Layout>
    </Router>

  );
}