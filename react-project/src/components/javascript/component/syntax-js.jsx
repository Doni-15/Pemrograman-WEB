export function SyntaxJS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Sintaks JavaScript</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Aturan Sintaks</h2>
                    <p>Sintaks adalah aturan bagaimana program harus dibangun:</p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        // Cara deklarasi variabel <br />
                        let x = 5; <br />
                        let y = 6; <br /> <br />
                        // Perhitungan sederhana <br />
                        let z = x + y; <br /> <br />
                        // Ini komentar
                    </div>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-3">Nilai JavaScript</h2>
                    <p>Sintaks JavaScript mendefinisikan dua jenis nilai:</p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Literal </strong> (Nilai tetap)
                    </p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Variabel </strong> (Nilai yang bisa berubah)
                    </p>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-3">Literal JavaScript</h2>
                    <p>
                        Aturan sintaks yang paling penting untuk literal (nilai tetap) adalah: <br />
                        Angka ditulis dengan atau tanpa desimal:
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        10.50 <br /> <br />
                        1001
                    </div>
                    <br />
                    <p>
                        String adalah teks, ditulis dalam tanda kutip ganda atau tunggal:
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        "John Doe" <br /> <br />
                        'John Doe'
                    </div>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-3">Variabel JavaScript</h2>
                    <p>
                        Variabel adalah wadah untuk menyimpan nilai data. Variabel harus diidentifikasi dengan nama unik.
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        // deklarasi nilai x <br />
                        let x; <br /> <br />
                        // inisialisasi nilai x <br />
                        x = 6;
                    </div>
                </div>

                <hr className="my-10" />

                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: JavaScript Syntax</h2>
                    <iframe
                        className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5"
                        src="https://www.youtube.com/embed/4BBlc_qDs8g"
                        title="Video Pengenalan JavaScript"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
        </>
    );
}