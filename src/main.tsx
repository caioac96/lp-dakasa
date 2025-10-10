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
          colorPrimaryHover: "#42634755", // hover
          colorPrimaryActive: "#42634755",
          colorLink: "#426347",
          colorLinkHover: "#42634755",
          colorLinkActive: "#ffffff99",
          colorText: "#426347",
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
