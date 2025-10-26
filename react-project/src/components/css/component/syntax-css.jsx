import gambarTag from "../../../assets/tag.png";
import gambarParagraph from "../../../assets/css_paragraph.png";

export function SyntaxCss() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Sintaks CSS</h2>
                <div className="p-2">
                    <h2 className="text-2xl py-5">Sintaks CSS</h2>
                    <p>Aturan CSS terdiri dari pemilih dan blok deklarasi:</p>
                    <img src={gambarTag} alt="Gambar HTML" className="py-5" />
                    <p>Pemilih menunjuk ke elemen HTML yang ingin Anda gayakan.</p>
                    <p>Blok deklarasi berisi satu atau beberapa deklarasi yang dipisahkan oleh titik koma.</p>
                    <p>Setiap deklarasi menyertakan nama properti CSS dan nilai, dipisahkan oleh titik dua.</p>
                    <p>Beberapa deklarasi CSS dipisahkan dengan titik koma, dan deklarasi Blok dikelilingi oleh kurung kurawal keriting.</p>
                    
                    <h2 className="py-5 text-xl">Contoh : </h2>
                    <img src={gambarParagraph} alt="Gambar HTML" className="pb-5" />
                    <p className="pt-2">
                        <span className="text-red-800 bg-blue-500">p</span> 
                        adalah selector dalam CSS (menunjuk ke elemen HTML yang ingin Anda gayakan)
                    </p>
                    <p>
                        <span className="text-red-800 bg-blue-500">color</span> 
                        adalah properti, dan 
                        <span className="text-red-800 bg-blue-500">red</span> 
                        merupakan nilai dari properti
                    </p>
                    <p>
                        <span className="text-red-800 bg-blue-500">text-align</span> 
                        adalah properti, dan 
                        <span className="text-red-800 bg-blue-500">center</span> 
                        merupakan nilai dari properti
                    </p>
                </div>
                <hr className="my-10" />
                <div className="aspect-w-16 aspect-h-9">
                    <h2 className="text-2xl">Video: Sintaks CSS</h2>
                    <iframe 
                        className="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                        src="https://www.youtube.com/embed/G8r00ZNopTE" 
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
