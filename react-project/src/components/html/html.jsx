import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBar } from "./component/link-side-bar.jsx";
import { PengantarHtml } from "./component/pengantar-html.jsx";
import { DasarHtml } from "./component/dasar-html.jsx";
import { ElemenHtml } from "./component/elemen-html.jsx";

export function Html() {  
    return (
        <>
            <main className="flex flex-1 justify-between flex-row pt-16 min-h-screen">
                <SideBar />
                <div className="w-5/6 ml-64 p-10">
                    <Routes>
                        <Route index element={<PengantarHtml />} />
                        <Route path="pengantar" element={<PengantarHtml />} />
                        <Route path="dasar" element={<DasarHtml />} />
                        <Route path="elemen" element={<ElemenHtml />} />
                    </Routes>
                </div>
            </main>
        </>
    );
}
