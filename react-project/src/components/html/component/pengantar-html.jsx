import gambarHtml from "../../../assets/html_sederhana.png";

export function PengantarHtml() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Pengantar HTML</h2>
                <div className="p-2">
                    <h2 className="text-2xl py-5">Apa Itu HTML?</h2>
                    <p>HTML (HyperText Markup Language) adalah bahasa markup standar yang digunakan untuk membuat dan menyusun halaman web.</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>HTML adalah singkatan dari <strong>Hyper Text Markup Language</strong></li>
                        <li>HTML digunakan untuk <strong>menjelaskan struktur halaman web</strong></li>
                        <li>HTML terdiri dari <strong>serangkaian elemen</strong></li>
                        <li>Elemen HTML memberi tahu browser bagaimana <strong>menampilkan konten</strong></li>
                        <li>Elemen HTML memberi label pada bagian-bagian konten seperti:
                            <ul className="list-disc list-inside ml-5">
                                <li>"Ini adalah judul"</li>
                                <li>"Ini adalah paragraf"</li>
                                <li>"Ini adalah tautan"</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div className="p-2">
                    <h2 className="text-2xl py-5">Dokumen HTML Sederhana</h2>
                    <img src={gambarHtml} alt="Gambar HTML" className="pb-5"/>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            Sintaks untuk mendeklarasikan HTML5 adalah 
                            <code className="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE html&gt;</code>.
                        </li>
                        <li>
                            Elemen adalah elemen akar dari HTML halaman
                            <code className="text-red-800 bg-blue-500 px-1">&lt;html&gt;</code>.
                        </li>
                        <li>
                            Elemen menentukan judul untuk elemen Halaman HTML (yang ditampilkan di bilah judul browser atau di tab halaman)
                            <code className="text-red-800 bg-blue-500 px-1">&lt;title&gt;</code>.
                        </li>
                        <li>
                            Elemen mendefinisikan dokumen, dan merupakan wadah untuk semua konten yang terlihat, seperti judul, paragraf, gambar, hyperlink, tabel, daftar, dll.
                            <code className="text-red-800 bg-blue-500 px-1">&lt;body&gt;</code>.
                        </li>
                        <li>
                            Elemen mendefinisikan judul besar
                            <code className="text-red-800 bg-blue-500 px-1">&lt;h1&gt;</code>.
                        </li>
                        <li>
                            Elemen mendefinisikan paragraf
                            <code className="text-red-800 bg-blue-500 px-1">&lt;p&gt;</code>.
                        </li>
                    </ul>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl py-5">Video: Pengenalan HTML</h2>
                    <iframe className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto" src="https://www.youtube.com/embed/it1rTvBcfRg" title="Video Pengenalan HTML" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
            </section> 
        </>
    );
}