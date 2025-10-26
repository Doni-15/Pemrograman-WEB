import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBar } from "./component/link-side-bar.jsx";
import { PengenalanJS } from "./component/pengenalan-js.jsx";
import { SyntaxJS } from "./component/syntax-js.jsx";
import { VariableJS } from "./component/variable-js.jsx";

export function JavaScript() {
    return (
        <>
            <main className="flex flex-1 justify-between flex-row pt-16 min-h-screen">
                <SideBar />
                <div className="w-5/6 ml-64 p-10">
                    <Routes>
                        <Route index element={<PengenalanJS />} />
                        <Route path="pengenalan" element={<PengenalanJS />} />
                        <Route path="syntax-js" element={<SyntaxJS />} />
                        <Route path="variable-js" element={<VariableJS />} />
                    </Routes>
                </div>
            </main>
        </>
    );
}
