import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ServicePage from './pages/servicePage.jsx'
import CareerPage from './pages/careerPage.jsx'
import BlogPage from './pages/blogPage.jsx'
import PortfolioPage from './pages/portfolioPage.jsx'
import ContactUs from './pages/contactUs.jsx'
import WhyChooseUs from './pages/whyChooseUs.jsx'
import BlogPageDetail from './pages/blogPageDetail.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import AddBlog from './pages/addBlog.jsx'
import AdminPanel from './pages/admin/adminPanel.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><App /><Footer /></>,
  },
  {
    path: '/services',
    element: <><Navbar/><ServicePage /></>,
  },
  {
    path: '/career',
    element: <><Navbar/><CareerPage /></>,
  },
  {
    path: '/blog',
    element: <><Navbar/><BlogPage /></>,
  },
  {
    path: '/blog/:id',
    element: <><Navbar/><BlogPageDetail /></>,
  },
  {
    path: '/portfolio',
    element: <><Navbar/><PortfolioPage /></>,
  },
  {
    path: '/contact',
    element: <><Navbar/><ContactUs /></>,
  },
  {
    path: '/why-choose-us',
    element: <><Navbar/><WhyChooseUs /></>,
  },
  {
    path: '/addBlog',
    element: <><Navbar/><AddBlog /></>,
  },
  {
    path: '/admin',
    element: <><Navbar/><AdminPanel /></>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
