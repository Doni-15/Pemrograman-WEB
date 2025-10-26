export function InstallTailwindCSS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Instalasi Tailwind CSS v4</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Instalasi Menggunakan CLI (NPM)</h2>
                    <p>
                        Metode ini cocok untuk proyek yang ingin mengoptimalkan performa dengan build CSS secara custom.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mt-2">
                        <li>
                            <strong>Install Tailwind CSS</strong>
                            <br />
                            <p className="ml-5">
                                Jalankan perintah berikut di direktori proyek:{" "}
                                <code className="text-red-800 px-1">npm install tailwindcss @tailwindcss/cli</code>
                            </p>
                        </li>

                        <li>
                            <strong>Impor Tailwind di CSS Anda</strong>
                            <br />
                            <p className="ml-5">
                                Tambahkan impor ke file CSS utama Anda:
                                <br />
                                <code className="text-red-800">@import "tailwindcss";</code>
                            </p>
                            <div className="border p-2 bg-gray-50 mt-1 ml-5 text-red-800">
                                @import "tailwindcss";
                            </div>
                        </li>

                        <li>
                            <strong>Memulai proses pembuatan CLI Tailwind</strong>
                            <br />
                            <p className="ml-5">
                                Jalankan:{" "}
                                <code className="text-red-800 px-1">
                                    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
                                </code>{" "}
                                Jalankan alat CLI untuk memindai file sumber Anda untuk kelas dan membangun CSS Anda.
                            </p>
                        </li>

                        <li>
                            <strong>Link file CSS ke HTML</strong>
                            <br />
                            <p className="ml-5">
                                Tambahkan file CSS yang dikompilasi ke{" "}
                                <code>&lt;head&gt;</code> dan mulailah menggunakan kelas utilitas Tailwind untuk menata
                                konten Anda:
                            </p>
                            <div className="border p-2 bg-gray-50 mt-1 ml-5 text-red-800">
                                &lt;link href="./output.css" rel="stylesheet" /&gt;
                            </div>
                        </li>
                    </ol>
                </div>

                <hr className="my-10" />

                <div className="p-2">
                    <h2 className="text-2xl pb-5">Instalasi Menggunakan CDN</h2>
                    <p>
                        Metode ini sangat cepat dan mudah, cocok untuk proyek kecil atau prototyping tanpa build tools.
                        <br />
                        Tambahkan tag <code>&lt;link&gt;</code> berikut langsung ke{" "}
                        <code>&lt;head&gt;</code> di file HTML kamu:
                    </p>
                    <div className="border p-2 bg-gray-50 mt-1 text-red-800">
                        &lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@4.2.0/dist/tailwind.min.css"
                        rel="stylesheet" /&gt;
                    </div>
                    <p className="mt-3">
                        Setelah itu, kamu bisa langsung memakai class Tailwind di HTML tanpa konfigurasi tambahan.
                    </p>
                </div>

                <hr className="my-10" />

                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Instalasi Tailwind CSS</h2>
                    <iframe
                        className="w-[60vw] h-96 rounded-lg shadow-lg pt-5 mx-auto"
                        src="https://www.youtube.com/embed/n9widGM__Lg"
                        title="Video Instalasi Tailwind CSS"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
        </>
    );
}