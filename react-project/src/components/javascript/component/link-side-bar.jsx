import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
        <aside id="navigasi_kiri_html" className="w-64 fixed top-[10vh] h-[90vh] overflow-y-scroll text-white px-6 z-10" style={{ background: "var(--warna-1)" }}>
            <h2 className="text-xl font-medium mb-6 mt-6">JavaScript Tutorial</h2>
            <ul className="space-y-2">
                <li>
                    <NavLink to="/javascript/pengenalan" replace className="hover:underline">
                        Pengenalan JavaScript
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/javascript/syntax-js" replace className="hover:underline">
                        Syntax JavaScript
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/javascript/variable-js" replace className="hover:underline">
                        Variable JavaScript
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}
