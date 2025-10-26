import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header.jsx";
import { Beranda } from "./components/beranda.jsx";
import { Footer } from "./components/footer.jsx";

import { Html } from "./components/html/html.jsx";
import { Css } from "./components/css/css.jsx";
import { JavaScript } from "./components/javascript/javascript.jsx";
import { TailwindCSS } from "./components/tailwindcss/tailwindcss.jsx";
import { KesanDanPesan } from "./components/kesan-dan-pesan/kesan-dan-pesan.jsx";

import { ScrollToTop } from "./scroll-top.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Beranda/>}/>
          <Route path="/html/*" element={<Html />} />
          <Route path="/css/*" element={<Css />} />
          <Route path="/javascript/*" element={<JavaScript />} />
          <Route path="/tailwindcss/*" element={<TailwindCSS />} />
          <Route path="/kesan-dan-pesan/*" element={<KesanDanPesan />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}