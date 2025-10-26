export function PengenalanTailwindCSS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Pengenalan Tailwind CSS</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Apa itu Tailwind CSS?</h2>
                    <p>
                        Tailwind CSS adalah framework CSS utility-first yang memudahkan proses styling langsung di dalam HTML
                        menggunakan kelas-kelas bawaan.
                    </p>
                    <p>
                        Dengan Tailwind CSS, kamu tidak perlu menulis file CSS panjang — cukup gunakan class seperti{" "}
                        <span className="text-red-800">p-4</span>,{" "}
                        <span className="text-red-800">text-center</span>, atau{" "}
                        <span className="text-red-800">bg-gray-200</span> langsung pada elemen HTML.
                    </p>
                    <p className="mt-4">Perbedaan antara CSS biasa dan Tailwind CSS:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>CSS biasa</strong> menulis styling di file terpisah dan menetapkan selector.
                        </li>
                        <li>
                            <strong>Tailwind CSS</strong> menggunakan class utility langsung di elemen HTML.
                        </li>
                    </ul>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl">Kegunaan Tailwind CSS</h2>

                    <h2 className="mt-5 pb-2 text-xl">Membuat Desain Responsive</h2>
                    <p>
                        Tailwind mempermudah pembuatan desain responsive dengan breakpoint bawaan seperti{" "}
                        <span className="text-red-800">sm:</span>,{" "}
                        <span className="text-red-800">md:</span>,{" "}
                        <span className="text-red-800">lg:</span>, dll.
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        &lt;div class="text-base md:text-xl"&gt;Teks ini berubah ukuran di layar lebih besar&lt;/div&gt;
                    </div>

                    <h2 className="mt-10 pb-2 text-xl">Kustomisasi Tampilan Tanpa CSS Tambahan</h2>
                    <p>
                        Kamu bisa langsung menyesuaikan warna, ukuran, padding, margin, dan lainnya langsung lewat class:
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        &lt;button class="bg-blue-500 text-white px-4 py-2"&gt;Klik Saya&lt;/button&gt;
                    </div>

                    <h2 className="mt-10 pb-2 text-xl">Tailwind CSS Mempercepat Workflow</h2>
                    <p>
                        Karena tidak perlu bolak-balik menulis class CSS sendiri, pengembangan antarmuka jadi jauh lebih cepat
                        dan efisien.
                    </p>

                    <h2 className="mt-10 pb-2 text-xl">Contoh Layout Grid Tailwind</h2>
                    <p>
                        Tailwind juga punya utilitas layout seperti grid dan flexbox. Berikut contoh membuat layout dengan grid:
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        &lt;div class="grid grid-cols-3 gap-4"&gt;<br />
                        &nbsp;&nbsp;&lt;div class="bg-gray-200"&gt;1&lt;/div&gt;<br />
                        &nbsp;&nbsp;&lt;div class="bg-gray-300"&gt;2&lt;/div&gt;<br />
                        &nbsp;&nbsp;&lt;div class="bg-gray-400"&gt;3&lt;/div&gt;<br />
                        &lt;/div&gt;
                    </div>
                </div>

                <hr className="my-10" />

                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Pengenalan Tailwind CSS</h2>
                    <iframe
                        className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5"
                        src="https://www.youtube.com/embed/rqdR9wbW71Y"
                        title="Video Pengenalan Tailwind CSS"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
        </>
    );
}
