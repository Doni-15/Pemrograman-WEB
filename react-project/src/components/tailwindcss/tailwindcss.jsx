import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBar } from "./component/link-side-bar.jsx";
import { PengenalanTailwindCSS } from "./component/pengenalan-tailwindcss.jsx";
import { InstallTailwindCSS } from "./component/install-tailwindcss.jsx";
import { PengaturanTailwindCSS } from "./component/atur-tailwindcss.jsx";

export function TailwindCSS() {
    return (
        <>
            <main className="flex flex-1 justify-between flex-row pt-16 min-h-screen">
                <SideBar />
                <div className="w-5/6 ml-64 p-10">
                    <Routes>
                        <Route index element={<PengenalanTailwindCSS />} />
                        <Route path="pengenalan" element={<PengenalanTailwindCSS />} />
                        <Route path="install" element={<InstallTailwindCSS />} />
                        <Route path="pengaturan" element={<PengaturanTailwindCSS />} />
                    </Routes>
                </div>
            </main>
        </>
    );
}
