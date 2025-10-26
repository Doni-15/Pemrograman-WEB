import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
        <header className="h-[10vh] px-10 text-2xl flex flex-row gap-5 w-screen items-center justify-between font-bold fixed z-50">
            <div>
                <h1 className="text-center font-bold pb-2 text-xl">Doni Rivaldo Simamora</h1>
            </div>

            <div className="flex flex-row gap-x-10 text-lg">
                <Link to="/">
                    <h1 className="hover:text-slate-600 text-center font-bold pb-2 text-xl">Beranda</h1>
                </Link>
                <Link to="/html">
                    <h1 className="hover:text-slate-600 text-center font-bold pb-2 text-xl">HTML</h1>
                </Link>
                <Link to="/css">
                    <h1 className="hover:text-slate-600 text-center font-bold pb-2 text-xl">CSS</h1>
                </Link>
                <Link to="/javascript">
                    <h1 className="hover:text-slate-600 text-center font-bold pb-2 text-xl">JavaScript</h1>
                </Link>
                <Link to="/tailwindcss">
                    <h1 className="hover:text-slate-600 text-center font-bold pb-2 text-xl">Tailwind CSS</h1>
                </Link>
                <Link to="/kesan-dan-pesan">
                    <h1 className="hover:text-slate-600 text-center font-bold pb-2 text-xl">Kesan & Pesan</h1>      
                </Link>
            </div>
        </header>
    </>
  );
}
