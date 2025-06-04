import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About/About'
import { Layout } from './Layout';
import Projects from './pages/Projects/Projects'
import Resources from './pages/Resources/Resources'
import Products from './pages/Products/Products'
import Solutions from './pages/Solutions/Solutions'
import OurLocations from './pages/OurLocations/OurLocations'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './pages/TermsService/TermsService'
import ContractorTerms from './pages/ContractorTerms/ContractorTerms'
import Careers from './pages/Careers/Careers'
import Sustainability from './pages/Sustainability/Sustainability'
import PressMedia from './pages/PressMedia/PressMedia'

const router = createBrowserRouter([
  { path: "/", element: <App />},
  { path: "/about", element: <Layout><About /></Layout> },
  { path: "/projects", element: <Layout><Projects /></Layout> },
  { path:"/resources", element : <Layout><Resources/></Layout> },
  { path:"/products", element : <Layout><Products/></Layout> },
  { path:"/solutions", element : <Layout><Solutions/></Layout> },
  { path:"/ourLocations", element : <Layout><OurLocations/></Layout> },
  { path:"/privacyPolicy", element : <Layout><PrivacyPolicy/></Layout> },
  { path:"/termsService", element : <Layout><TermsOfService/></Layout> },
  { path:"/contractorTerms", element : <Layout><ContractorTerms/></Layout> },
  { path:"/careers", element : <Layout><Careers/></Layout> },
  { path:"/sustainability", element : <Layout><Sustainability/></Layout> },
  { path:"/pressMedia", element : <Layout><PressMedia/></Layout> },
],{ basename: '/RenuBuildingMaterialSanitaryStore'}
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)