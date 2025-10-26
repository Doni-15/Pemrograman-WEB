import { NavLink } from "react-router-dom";

export function SideBar() {  
  return (
        <aside id="navigasi_kiri_html" className="w-64 fixed top-[10vh] h-[90vh] overflow-y-scroll text-white px-6 z-10" style={{ background: "var(--warna-1)" }}>
            <h2 className="text-2xl font-medium mb-6 mt-6">HTML Tutorial</h2>
            <ul className="space-y-2">
                <li>
                    <NavLink to="/html/pengantar" replace className="hover:underline">
                        Pengantar HTML
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/html/dasar" replace className="hover:underline">
                        HTML Dasar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/html/elemen" replace className="hover:underline">
                        Elemen HTML
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}
