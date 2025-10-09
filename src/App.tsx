import { Image, Layout, Typography } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyDefault from "./components/BodyDefault";
import { ContainerIconsHeader, ContainerLogo, Header, HomeContainer } from "./styles";
import logo from "./assets/logobranca.png";
import MenuDefault from "./components/MenuDefault";
import { GrInstagram } from "react-icons/gr";

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
              <Typography.Link onClick={handleClick}>
                <GrInstagram size={20} />
              </Typography.Link>
            </ContainerIconsHeader>
            <ContainerLogo>
              <Image preview={false} className="logo-div" src={logo}></Image>
            </ContainerLogo>
            <MenuDefault />
          </Header>
        </HomeContainer>
        <Router>
          <Routes>
            <Route path="/" element={<BodyDefault />} />
          </Routes>
        </Router>
      </Content>
    </Layout>
  );
}