export function PengenalanJS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Pengenalan JavaScript</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Apa itu JavaScript?</h2>
                    <p>
                        JavaScript adalah bahasa pemrograman web. Itu dapat menghitung, memanipulasi, dan memvalidasi data. 
                        Itu dapat memperbarui dan mengubah HTML dan CSS.
                    </p>
                    <p>Perbedaan HTML, CSS, JavaScript :</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>HTML</strong> untuk menentukan konten halaman web</li>
                        <li><strong>CSS</strong> untuk menentukan tata letak halaman web</li>
                        <li><strong>JavaScript</strong> untuk memprogram perilaku halaman web</li>
                    </ul>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl">Kegunaan JavaScript</h2>

                    <h2 className="mt-5 pb-2 text-xl">JavaScript Dapat Mengubah Konten HTML</h2>
                    <p>
                        Salah satu dari banyak metode HTML JavaScript adalah
                        <span className="text-red-800">getElementById()</span>.<br />
                        Contoh di bawah ini "menemukan" elemen HTML (dengan id="demo"), dan mengubah konten elemen (innerHTML) menjadi "Hello JavaScript":<br />
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        document.getElementById("demo").innerHTML = "Hello JavaScript";
                    </div>

                    <h2 className="mt-10 pb-2 text-xl">JavaScript Dapat Mengubah Gaya HTML (CSS)</h2>
                    <p>Mengubah gaya elemen HTML, adalah varian dari mengubah atribut HTML:</p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        document.getElementById("demo").style.fontSize = "35px";
                    </div>

                    <h2 className="mt-10 pb-2 text-xl">JavaScript Dapat Menyembunyikan Elemen HTML</h2>
                    <p>
                        Menyembunyikan elemen HTML dapat dilakukan dengan mengubah gaya:
                        <span className="text-red-800">display</span>.<br />
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        document.getElementById("demo").style.display = "none";
                    </div>

                    <h2 className="mt-10 pb-2 text-xl">JavaScript Dapat Menampilkan Elemen HTML</h2>
                    <p>
                        Menampilkan elemen HTML tersembunyi juga dapat dilakukan dengan mengubah gaya:
                        <span className="text-red-800">display</span>.<br />
                    </p>
                    <div className="text-red-800 border p-2 mt-1 bg-amber-100">
                        document.getElementById("demo").style.display = "block";
                    </div>
                </div>

                <hr className="my-10" />

                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Pengantar JavaScript</h2>
                    <iframe
                        className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5"
                        src="https://www.youtube.com/embed/zofMnllkVfI"
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