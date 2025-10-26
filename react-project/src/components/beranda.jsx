import { Link } from "react-router-dom";

export function Beranda (){
    return (
        <>
            <main className="flex flex-1 pb-12 justify-center flex-col z-0">
                <div className="w-screen mb-12 mt-44">
                    <h1 className="text-xl text-center font-bold pb-2">Selamat Datang di Laman</h1>
                    <h1 className="text-2xl text-center font-bold pb-2">Belajar Membuat Website Dari Nol</h1>
                    <h1 className="text-center font-bold pb-2 text-xl">By : Doni Rivaldo Simamora</h1>
                    <p className="mx-auto w-3/4 py-8 text-lg text-center ">
                        Diluncurkan pada tahun 2025, platform ini adalah sebuah ruang belajar yang didedikasikan untuk siapa saja yang ingin memulai perjalanannya di dunia pemrograman web. Kami menyajikan panduan belajar yang terstruktur, praktis, dan mudah diikuti bagi para pemula melalui konten yang fokus pada fundamental dan proyek sederhana. <br/>
                        Kami percaya bahwa belajar coding haruslah sebuah proses yang menginspirasi, tidak menakutkan, dan menyenangkan. Visi inilah yang ingin kami wujudkan melalui setiap tutorial dan materi di platform ini, setiap harinya.
                    </p>

                    <div className="bg-amber-500 font-bold text-lg md:text-xl rounded-full w-3/12 text-center mx-auto mt-5 border-2 border-transparent hover:border-white">
                        <Link to="/html/">
                            <h3 className="text-center p-4 text-wrap"> Ayo Mulai Belajar Sekarang! </h3> 
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-10 p-5 mt-5 text-justify">
                    {/* Materi HTML */}
                    <div id="html_card" className="flex flex-col w-96 rounded-xl py-10 px-5 h-auto border-2 border-transparent shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:border-white">
                        <h1 className="text-center font-bold pb-2 text-xl">HTML</h1>
                        <p>
                            <strong>HTML (HyperText Markup Language)</strong> adalah bahasa dasar untuk membuat dan menyusun halaman web. Dengan HTML, kamu bisa menampilkan teks, gambar, tautan, dan elemen lainnya di browser.
                        </p>
                        <p>
                            HTML bukan bahasa pemrograman, melainkan bahasa markup yang menggunakan tag untuk mengatur struktur konten. Ibarat kerangka, HTML adalah fondasi dari setiap halaman website yang kamu lihat di internet.
                        </p>
                        <h2 className="pt-5 pb-2 font-bold">Mengapa Belajar HTML Penting?</h2>
                        <ul className="list-none">
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Fondasi Web Development</strong> : Sebelum belajar CSS atau JavaScript, kamu wajib memahami HTML.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Digunakan di Semua Website</strong> _ Hampir setiap halaman web yang kamu buka hari ini dibangun dengan HTML.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Mudah Dipelajari untuk Pemula</strong> : Bahkan tanpa pengalaman coding, kamu bisa mulai menulis HTML dalam hitungan menit
                                </span>
                            </li>
                        </ul>
                        <Link to="/html">
                            <div id="html_link_main" className="mt-5 bg-amber-500 px-5 py-3 rounded-xl text-center">
                                <span className="no-underline hover:underline hover:text-slate-600 font-bold">
                                    Pelajari Sekarang
                                </span>
                                <span>&#8594;</span>
                            </div>
                        </Link>
                    </div>
                    {/* Akhir materi HTML */}

                    {/* Materi CSS */}
                    <div id="css_card" className="flex flex-col w-96 rounded-xl py-10 px-5 h-auto border-2 border-transparent shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:border-white">
                        <h1 className="text-center font-bold pb-2 text-xl">CSS</h1>
                        <p>
                            <strong>CSS (Cascading Style Sheets)</strong> adalah bahasa yang digunakan untuk mengatur tampilan halaman web. Dengan CSS, kamu bisa mengubah warna, jenis huruf, ukuran, dan posisi elemen di halaman.
                        </p>
                        <p>
                            CSS bukan bahasa pemrograman, melainkan bahasa gaya yang membuat halaman web terlihat menarik dan terstruktur. Jika HTML adalah kerangka, maka CSS adalah desain luarnya yang memberi tampilan profesional.
                        </p>
                        <h2 className="pt-5 pb-2 font-bold">Mengapa Belajar CSS Penting?</h2>
                        <ul className="list-none">
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Mempercantik Tampilan Website</strong> : CSS memungkinkan kamu mengubah desain halaman web sesuai keinginan, dari warna hingga animasi.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Digunakan di Semua Website Modern</strong> : Hampir semua situs profesional menggunakan CSS untuk menciptakan pengalaman pengguna yang menarik dan responsif.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Mudah Diintegrasikan dan Dipelajari</strong> : CSS bisa langsung digunakan bersama HTML dan mudah dipahami, terutama bagi pemula yang ingin mulai membuat website yang terlihat profesional.
                                </span>
                            </li>
                        </ul>
                        <Link to="/css">
                            <div id="html_link_main" className="mt-5 bg-amber-500 px-5 py-3 rounded-xl text-center">
                                <span className="no-underline hover:underline hover:text-slate-600 font-bold">
                                    Pelajari Sekarang
                                </span>
                                <span>&#8594;</span>
                            </div>
                        </Link>
                    </div>
                    {/* Akhir materi CSS */}

                    {/* Materi JavaScript */}
                    <div id="js_card" className="flex flex-col w-96 rounded-xl py-10 px-5 h-auto border-2 border-transparent shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:border-white">
                        <h1 className="text-center font-bold pb-2 text-xl">JavaScript</h1>
                        <p>
                            <strong>JavaScript (JS)</strong> adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif. Dengan JavaScript, kamu bisa menambahkan fitur seperti tombol yang bisa diklik, form yang bisa diproses, hingga animasi dinamis di website.
                        </p>
                        <p>
                            Berbeda dari HTML dan CSS, JavaScript bisa merespons tindakan pengguna secara langsung. Jika HTML adalah kerangka, dan CSS adalah tampilan, maka JavaScript adalah otak yang menghidupkan halaman web.
                        </p>
                        <h2 className="pt-5 pb-2 font-bold">Mengapa Belajar JavaScript Penting?</h2>
                        <ul className="list-none">
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Menambahkan Interaktivitas ke Website</strong> : JavaScript membuat halaman web jadi hidup, seperti tombol yang bisa diklik, form yang bisa divalidasi, atau konten yang bisa berubah secara dinamis
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Digunakan di Hampir Semua Website Modern</strong> : Dari situs sederhana hingga aplikasi web kompleks, JavaScript jadi bagian penting dalam pengembangannya.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Wajib Dikuasai untuk Menjadi Web Developer</strong> : Bersama HTML dan CSS, JavaScript adalah bagian dari “tiga serangkai” utama yang harus dikuasai dalam web development.
                                </span>
                            </li>
                        </ul>
                        <Link to="/javascript">
                            <div id="html_link_main" className="mt-5 bg-amber-500 px-5 py-3 rounded-xl text-center">
                                <span className="no-underline hover:underline hover:text-slate-600 font-bold">
                                    Pelajari Sekarang
                                </span>
                                <span>&#8594;</span>
                            </div>
                        </Link>
                    </div>
                    {/* Akhir materi JavaScript */}

                    {/* Materi TailwindCSS */}
                    <div id="tailwind_card" className="flex flex-col w-96 rounded-xl py-10 px-5 h-auto border-2 border-transparent shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:border-white">
                        <h1 className="text-center font-bold pb-2 text-xl">Tailwind CSS</h1>
                        <p>
                            <strong>Tailwind CSS</strong> adalah framework utility-first untuk CSS yang memudahkan kamu membuat desain antarmuka langsung di dalam HTML. Dengan Tailwind, kamu bisa mengatur warna, ukuran, jarak, dan responsivitas hanya dengan menambahkan className pada elemen.
                        </p>
                        <p>
                            Berbeda dari CSS biasa yang menulis kode di file terpisah, Tailwind memungkinkan kamu membangun desain secara cepat dan konsisten tanpa harus membuat banyak aturan CSS manual.
                        </p>
                        <h2 className="pt-5 pb-2 font-bold">Mengapa Belajar Tailwind Penting?</h2>
                        <ul className="list-none">
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Mempercepat Proses Desain</strong> : Dengan className utility yang siap pakai, kamu bisa membuat tampilan menarik tanpa harus menulis CSS dari nol.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Konsisten dan Skalabel</strong> : Tailwind mendorong penulisan kode yang rapi dan seragam, cocok untuk proyek kecil maupun besar.
                                </span>
                            </li>
                            <li className="flex flex-row">
                                <span className="pr-3 text-xl"> &bull; </span>
                                <span>
                                    <strong>Populer di Dunia Modern Web</strong> : Banyak developer dan tim startup hingga perusahaan besar mengandalkan Tailwind karena efisiensinya.
                                </span>
                            </li>
                        </ul>
                        <Link to="/tailwindcss">
                            <div id="html_link_main" className="mt-5 bg-amber-500 px-5 py-3 rounded-xl text-center">
                                <span className="no-underline hover:underline hover:text-slate-600 font-bold">
                                    Pelajari Sekarang
                                </span>
                                <span>&#8594;</span>
                            </div>
                        </Link>
                    </div>
                    {/* Akhir materi TailwindCSS  */}
                </div>
            </main>
        </>
    );
}