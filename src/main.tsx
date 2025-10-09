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
          colorPrimary: "#426347",
          colorPrimaryHover: "#ffffff99", // hover
          colorPrimaryActive: "#ffffff99",
          colorLink: "#ffffff",
          colorLinkHover: "#ffffff99",
          colorLinkActive: "#ffffff99",
          colorText: "#111111",
          colorBgContainer: "#111111",
          fontFamily: "'Poppins', sans-serif",
          borderRadius: 8,
        },
        components: {
          Button: {
            colorPrimary: "#426347",
            colorBorder: "#426347"
          },
          Input: {
            activeBorderColor: "#426347",
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
