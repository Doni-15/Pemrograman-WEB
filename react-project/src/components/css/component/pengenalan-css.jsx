import gambarCSS from "../../../assets/css_sederhana.png";

export function PengenalanCSS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Pengenalan CSS</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Apa itu CSS?</h2>
                    <p>CSS adalah bahasa yang kita gunakan untuk menata halaman Web.</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>CSS adalah singkatan dari <strong>Cascading Style Sheets</strong></li>
                        <li>CSS menjelaskan bagaimana elemen HTML akan ditampilkan di layar, kertas, atau di media lain</li>
                        <li>CSS menghemat banyak pekerjaan. Itu dapat mengontrol tata letak beberapa halaman web sekaligus</li>
                        <li>Stylesheet eksternal disimpan dalam file CSS</li>
                    </ul>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-3">Mengapa Menggunakan CSS?</h2>
                    <p>
                        CSS digunakan untuk menentukan gaya untuk halaman web Anda, termasuk desain, tata letak dan variasi tampilan untuk perangkat dan ukuran layar yang berbeda.
                    </p>

                    <h2 className="py-5 text-xl">Contoh :</h2>
                    <img src={gambarCSS} alt="Gambar CSS" className="pb-5" />
                </div>

                <hr className="my-10" />

                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Pengenalan CSS</h2>
                    <iframe 
                        className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                        src="https://www.youtube.com/embed/AGDDdsiZ0Ko" 
                        title="Video Pengenalan CSS"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            </section> 
        </>
    );
}