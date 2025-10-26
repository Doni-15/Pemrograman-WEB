import gambarId from "../../../assets/id_css.png";
import gambarClass from "../../../assets/class_css.png";
import gambarUniversal from "../../../assets/universal_css.png";
import gambarGroup from "../../../assets/group_css.png";

export function SelectorCss() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">CSS Selector</h2>
                <div className="p-2">
                    <h2 className="text-2xl py-5">CSS Selector</h2>
                    <p>Selector CSS digunakan untuk "menemukan" (atau memilih) elemen HTML yang Anda ingin gaya.</p>
                    <p className="pb-3">Kita dapat membagi pemilih CSS menjadi lima kategori:</p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Simple selectors </strong>
                        (pilih elemen berdasarkan nama, id, kelas)
                    </p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Combinator selectors </strong>
                        (pilih elemen berdasarkan hubungan tertentu di antara mereka)
                    </p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Pseudo-class selectors </strong>
                        (pilih elemen berdasarkan status tertentu)
                    </p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Pseudo-elements selectors </strong>
                        (pilih dan gaya bagian dari elemen)
                    </p>
                    <p className="flex flex-row text-wrap py-1">
                        <strong>● Attribute selectors </strong>
                        (pilih elemen berdasarkan nilai atribut atau atribut)
                    </p>
                </div>
                <hr className="my-10" />
                <div className="px-2">
                    <h2 className="text-2xl pb-3">CSS id Selector</h2>
                    <p>
                        Selector menggunakan atribut id (
                        <span className="text-red-800 bg-blue-500 underline">id</span> 
                        ) dari elemen HTML untuk memilih elemen tertentu. id elemen unik dalam halaman, jadi selector id adalah biasa pilih satu elemen unik! Untuk memilih elemen dengan id tertentu, tulis karakter hash (#), diikuti dengan id elemen.
                    </p>
                    <h2 className="py-5 text-xl">Contoh : </h2>
                    <img src={gambarId} alt="Gambar HTML" className="pb-5" />                    
                </div>  
                
                <hr className="my-10" />
                
                <div className="px-2">
                    <h2 className="text-2xl pb-3">CSS class Selector</h2>
                    <p>
                        Pemilih memilih elemen HTML dengan atribut kelas (
                            <span className="text-red-800 bg-blue-500 underline">class</span> 
                            ) tertentu. Untuk memilih elemen dengan kelas tertentu, tulis karakter titik (.), diikuti dengan atribut nama kelas.
                    </p>
                    <h2 className="py-5 text-xl">Contoh : </h2>
                    <img src={gambarClass} alt="Gambar HTML" className="pb-5" />                    
                </div>  
                
                <hr className="my-10" />
                
                <div className="px-2">
                    <h2 className="text-2xl pb-3">CSS Universal Selector</h2>
                    <p>
                        Memilih semua HTML elemen di halaman
                        <span className="text-red-800 bg-blue-500 underline">universal selector (*)</span> 
                        Aturan CSS di bawah ini akan memengaruhi setiap elemen HTML di halaman
                    </p>
                    <h2 className="py-5 text-xl">Contoh : </h2>
                    <img src={gambarUniversal} alt="Gambar HTML" className="pb-5" />
                </div>  
                
                <hr className="my-10" />
                
                <div className="px-2">
                    <h2 className="text-2xl pb-3">CSS Grouping Selector</h2>
                    <p>
                        Memilih semua elemen HTML dengan gaya yang sama Definisi
                        <span className="text-red-800 bg-blue-500 underline">grouping selector</span> 
                        . Lihat kode CSS berikut (elemen h1, h2, dan p memiliki definisi gaya)
                    </p>
                    <h2 className="py-5 text-xl">Contoh : </h2>
                    <img src={gambarGroup} alt="Gambar HTML" className="pb-5" />
                </div>  
                
                <hr className="my-10" />
                
                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Selector Sederhana CSS</h2>
                    <iframe className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                        src="https://www.youtube.com/embed/ZNskBxLVOfs" 
                        title="Video Pengenalan HTML"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            </section> 
        </>
    );
}