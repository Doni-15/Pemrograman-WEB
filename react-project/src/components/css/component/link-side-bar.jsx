import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
        <aside id="navigasi_kiri_html" className="w-64 fixed top-[10vh] h-[90vh] overflow-y-scroll text-white px-6 z-10" style={{ background: "var(--warna-1)" }}>
            <h2 className="text-2xl font-medium mb-6 mt-6">CSS Tutorial</h2>
            <ul className="space-y-2">
                <li>
                    <NavLink to="/css/pengenalan" replace className="hover:underline">
                        Pengenalan CSS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/css/syntax-css" replace className="hover:underline">
                        Syntax CSS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/css/selector-css" replace className="hover:underline">
                        Selector CSS
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}
