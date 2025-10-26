import { Link } from "react-router-dom";

import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import email from "../assets/email.svg";

export function Footer() {
  return (
    <footer id="footer" className="z-100 w-screen relative">
        <div className="text-2xl flex flex-row gap-5 items-center justify-between font-bold px-10 pb-2 pt-5 " style={{ background: "var(--warna-k-1)" }}>
            <h1 className="px-5 text-center font-bold pb-2 text-xl">
                Doni Rivaldo Simamora
            </h1>
        </div>
        <div className="text-2xl flex flex-row gap-5 items-center justify-between font-bold px-10 pb-10 " style={{ background: "var(--warna-k-2)" }}>
            <div className="p-5 w-3/5 flex flex-row gap-5 justify-between text-left h-auto">
                <div className="w-1/3 flex flex-col gap-3">
                    <Link to="/html" className="text-lg font-semibold hover:underline"> HTML </Link>
                    <Link to="/css" className="text-lg font-semibold hover:underline"> CSS </Link>
                    <Link to="/javascript" className="text-lg font-semibold hover:underline"> JavaScript </Link>
                    <div className="flex flex-row gap-5 mt-8">
                        <a href="https://wa.me/6282217506360" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="WhatsApp" title="WhatsApp" className="w-9"/>
                        </a>
                        <a href="https://www.instagram.com/donisimamora15?igsh=amlvcGd0YzQ5bHpl" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram"  title="Instagram" className="w-9"/>
                        </a>
                        <a href="mailto:donirivaldo@students.usu.ac.id" target="_blank" rel="noopener noreferrer">
                            <img src={email} alt="Email" title="Email" className="w-9"/>
                        </a>
                    </div>
                </div>
                <div className="w-1/3">
                    <Link to="/tailwindcss" className="text-lg font-semibold hover:underline"> Tailwind CSS </Link>
                </div>
                <div className="w-1/3">
                    <Link to="/kesan-dan-pesan" className="text-lg font-semibold hover:underline"> Kesan dan Pesan  </Link>
                </div>
            </div>
            <div className="px-10 py-10 w-2/5 flex flex-row gap-5 justify-between text-left h-auto">
                <div className="w-full h-auto">
                    <a href="https://maps.app.goo.gl/RrTCkrNwUQjvYUas6" target="_blank" rel="noopener noreferrer" title="Alamat" className="text-lg font-semibold hover:underline">
                        <p className="leading-5">
                            Jalan Universitas No. 9 Universitas Sumatera Utara, Medan, 20222, Sumatera Utara
                        </p>
                    </a>
                    <div className="flex flex-row my-2">
                        <img className="w-8 mr-3" src={whatsapp} alt="whatsapp"/>
                        <a href="https://wa.me/6282217506360" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-lg font-semibold hover:underline">
                            +62-822-1750-6360
                        </a>
                    </div>
                    <div className="flex flex-row my-2">
                        <img className="w-8 mr-3" src={instagram} alt="instagram"/>
                        <a href="https://www.instagram.com/donisimamora15?igsh=amlvcGd0YzQ5bHpl" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-lg font-semibold hover:underline"> 
                            @donisimamora15
                        </a>
                    </div>
                    
                    <div className="flex flex-row my-2">
                        <img className="w-8 mr-3" src={email} alt="email"/>
                        <a href="mailto:donirivaldo@students.usu.ac.id" target="_blank" rel="noopener noreferrer" title="Email" className="text-lg font-semibold hover:underline"> 
                            donirivaldo@students.usu.ac.id
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}