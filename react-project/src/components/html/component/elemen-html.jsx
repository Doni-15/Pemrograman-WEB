import gambarHtml from "../../../assets/html_sederhana.png";

export function ElemenHtml() {
    return (
        <section>
            <h2 className="text-center font-bold text-4xl">Elemen HTML</h2>
            <p className="pt-5 px-2">
                Elemen HTML ditentukan oleh tag start, beberapa konten, dan tag akhir.
            </p>
            <hr className="my-10" />   
            <div className="px-2">
                <h2 className="text-2xl pb-3">Elemen HTML</h2>
                <p>
                    Elemen HTML adalah segalanya mulai dari tag awal hingga tag akhir:
                    <code className="text-red-800 bg-blue-500 px-1"> &lt;nama tag&gt;</code> 
                    Konten masuk ke sini
                    <code className="text-red-800 bg-blue-500 px-1">&lt;/nama tag&gt;</code>.
                </p>
                <p className="py-2">
                    Contoh beberapa elemen HTML: <br />
                    <code className="text-red-800 bg-blue-500 pr-1 ml-10"> &lt;h1&gt;</code>Judul Pertama Saya<code className="text-red-800 bg-blue-500 px-1">&lt;/h1&gt;</code> <br />
                    <code className="text-red-800 bg-blue-500 pr-1 ml-10"> &lt;p&gt;</code>Paragraf pertama saya<code className="text-red-800 bg-blue-500 px-1">&lt;/p&gt;</code>
                </p>
            </div>                             
            <hr className="my-10" />   
            <div className="px-2">
                <h2 className="text-2xl pb-3">Elemen HTML Bersarang</h2>
                <p>
                    Elemen HTML dapat bersarang (ini berarti elemen dapat berisi elemen lain). Semua dokumen HTML terdiri dari elemen HTML bersarang. Contoh berikut berisi empat elemen HTML
                    <code className="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;body&gt; &lt;h1&gt; &lt;p&gt;</code>
                </p>
                <h2 className="py-5 text-xl">Contoh : </h2>
                <img src={gambarHtml} alt="" className="py-2" />
                <h2 className="py-5 text-xl">Contoh Penjelasan : </h2>
                <p>
                    Elemen adalah elemen akar dan itu mendefinisikan seluruh dokumen HTML.
                    <code className="text-red-800 bg-blue-500 px-1">&lt;html&gt;</code>
                </p>
                <p>
                    Ini memiliki tag awal dan tag akhir
                    <code className="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;/html&gt;</code>.
                </p>
                <p>
                    Kemudian, di dalam elemen ada sebuah elemen:
                    <code className="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;body&gt;</code>
                </p>
                <p>
                    Elemen mendefinisikan badan dokumen
                    <code className="text-red-800 bg-blue-500 px-1">&lt;body&gt;</code>.
                    Ini memiliki tag awal dan tag akhir
                    <code className="text-red-800 bg-blue-500 px-1">&lt;body&gt; &lt;/body&gt;</code>.
                </p>
                <p>
                    Elemen mendefinisikan judul
                    <code className="text-red-800 bg-blue-500 px-1">&lt;h1&gt;</code>.
                    Ini memiliki tag awal dan tag akhir:
                    <code className="text-red-800 bg-blue-500 px-1">&lt;h1&gt; &lt;/h1&gt;</code>.
                </p>
                <p>
                    Elemen mendefinisikan paragraf
                    <code className="text-red-800 bg-blue-500 px-1">&lt;p&gt;</code>.
                    Ini memiliki tag awal dan tag akhir:
                    <code className="text-red-800 bg-blue-500 px-1">&lt;p&gt; &lt;/p&gt;</code>.
                </p>
            </div>                             
            <hr className="my-10" />   
            <div className="px-2">
                <h2 className="text-2xl pb-3">Referensi Tag HTML</h2>
                <p>
                    Berikut referensi tag berisi informasi tambahan tentang tag ini dan atributnya. Klik link 
                    <a href="" className="underline text-blue-900 hover:text-slate-600">Referensi Tag HTML</a>
                </p>
            </div>                             
            <hr className="my-10" />
            <div className="aspect-w-16 aspect-h-9">
                <h2 className="text-2xl">Video: Elemen HTML</h2>
                <iframe 
                    className="w-[60vw] h-96 rounded-lg shadow-lg pt-5 mx-auto" 
                    src="https://www.youtube.com/embed/vIoO52MdZFE"
                    title="Video Pengenalan HTML"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>                           
        </section>
    );
}