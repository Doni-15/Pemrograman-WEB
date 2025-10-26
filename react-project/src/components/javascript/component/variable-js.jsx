export function VariableJS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Variabel JavaScript</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Variabel</h2>
                    <p>
                        Variabel JavaScript adalah wadah untuk data. Variabel JavaScript dapat dideklarasikan dengan cara:
                    </p>

                    <h2 className="pt-5">Contoh menggunakan let</h2>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        let x = 5; <br />
                        let y = 6; <br />
                        let z = x + y; <br />
                    </div>

                    <h2 className="pt-5">Contoh menggunakan const</h2>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        const x = 5; <br />
                        const y = 6; <br />
                        const z = x + y; <br />
                    </div>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-3">Mendeklarasikan Variabel JavaScript</h2>
                    <p>
                        Membuat variabel di JavaScript disebut mendeklarasikan variabel. Anda dapat mendeklarasikan variabel JavaScript dengan{' '}
                        <span className="text-red-800">let</span> atau{' '}
                        <span className="text-red-800">const</span>.
                    </p>

                    <h2 className="pt-5">Contoh menggunakan let</h2>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        let carName;
                    </div>
                    <p className="pt-2">
                        Setelah deklarasi, variabel tidak memiliki nilai (<span className="text-red-800">undefined</span>).
                        Untuk menetapkan nilai ke variabel, gunakan tanda sama dengan:
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        carName = "Volvo";
                    </div>

                    <h2 className="pt-5">Contoh menggunakan const</h2>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        const carName = "Volvo";
                    </div>
                    <p className="pt-2">
                        Selalu gunakan jika nilainya tidak boleh diubah <span className="text-red-800">const</span>.
                    </p>
                </div>

                <hr className="my-10" />

                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Variabel JavaScript</h2>
                    <iframe
                        className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5"
                        src="https://www.youtube.com/embed/7xStNKTM3bE"
                        title="Video Variabel JavaScript"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
        </>
    );
}
