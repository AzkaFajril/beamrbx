import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/home'
import Genelator from './components/genelatorweb/homedashboard'
import AutoHar from './components/genelatorweb/autohar'
import Hyperlink from './components/genelatorweb/hyperlink'
import Imortal from './components/genelatorlinkweb/imortal'
import INJURIES from './components/genelatorlinkweb/INJURIES'
import Splunk from './components/genelatorlinkweb/splunk'
import Shockify from './components/genelatorlinkweb/shockify'
import HyperlinkFormatter from './components/profil'
import TrainingProtocols from './components/TrainingProtocols'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Genelator" element={<Genelator/>} />
        <Route path="/AutoHar" element={<AutoHar/>} />
        <Route path="/hyperlink" element={<Hyperlink/>} />
        <Route path="/hyperlink" element={<Hyperlink/>} />
        <Route path="/Imortal" element={<Imortal/>} />
        <Route path="/injuries" element={<INJURIES/>} />
        <Route path="/splunk" element={<Splunk/>} />
        <Route path="/shockify" element={<Shockify/>} />
        <Route path="/HyperlinkFormatter" element={<HyperlinkFormatter/>} />
        <Route path="/TrainingProtocols" element={<TrainingProtocols/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
