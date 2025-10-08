import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstagramCarousel from "./components/InstagramCarousel";

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="content">
      <Content>
        {/* <Card> */}
          <Router>
            <Routes>
              <Route path="/" element={<InstagramCarousel />} />
            </Routes>
          </Router>
        {/* </Card> */}
      </Content>
    </Layout>
  );
}