import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#426369",
          colorPrimaryHover: "#42636955", // hover
          colorPrimaryActive: "#42636955",
          colorLink: "#426369",
          colorLinkHover: "#42636955",
          colorLinkActive: "#ffffff99",
          colorText: "#426369",
          colorBgContainer: "#111111",
          fontFamily: "'Poppins', sans-serif",
          borderRadius: 8,
        },
        components: {
          Button: {
            colorPrimary: "#426369",
            colorBorder: "#426369"
          },
          Input: {
            activeBorderColor: "#426369",
            hoverBorderColor: "#ffffff99",
            colorTextPlaceholder: "#888888",
          },
          Card: {
            colorBgContainer: "#111111",
            colorText: "#ffffff",
          },
          Form: {
            labelColor: "#ffffff",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
