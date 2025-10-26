import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBar } from "./component/link-side-bar.jsx";
import { PengenalanCSS } from "./component/pengenalan-css.jsx";
import { SyntaxCss } from "./component/syntax-css.jsx";
import { SelectorCss } from "./component/selector-css.jsx";

export function Css() {
    return (
        <>
            <main className="flex flex-1 justify-between flex-row pt-16 min-h-screen">
                <SideBar />
                <div className="w-5/6 ml-64 p-10">
                    <Routes>
                        <Route index element={<PengenalanCSS />} />
                        <Route path="pengenalan" element={<PengenalanCSS />} />
                        <Route path="syntax-css" element={<SyntaxCss />} />
                        <Route path="selector-css" element={<SelectorCss />} />
                    </Routes>
                </div>
            </main>
        </>
    );
}
