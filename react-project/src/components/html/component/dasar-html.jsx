import gambarHtml from "../../../assets/html_sederhana.png";
import gambarHeading from "../../../assets/heading.png";
import gambarParagraph from "../../../assets/paragraph.png";

export function DasarHtml() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Contoh Dasar HTML</h2>
                <p className="pt-5 px-2">
                    Dalam bab ini kita akan menunjukkan beberapa contoh HTML dasar. <br />
                    Jangan khawatir jika kami menggunakan tag yang belum Anda pelajari.
                </p>
                <hr className="my-10" />
                <div className="px-2">
                    <h2 className="text-2xl pb-3">Dokumen HTML</h2>
                    <p>
                        Semua dokumen HTML harus dimulai dengan deklarasi jenis dokumen:
                        <code className="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE html&gt;</code>.
                    </p>
                    <p className="py-2">
                        Dokumen HTML itu sendiri dimulai dengan dan diakhiri dengan
                        <code className="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;/html&gt;</code>.
                    </p>
                    <p>
                        Semua dokumen HTML harus dimulai dengan deklarasi jenis dokumen:
                        <code className="text-red-800 bg-blue-500 px-1">&lt;body&gt; &lt;/body&gt;</code>.
                    </p>
                    <h2 className="py-5 text-xl">Contoh : </h2>
                    <img src={gambarHtml} alt="Contoh Dasar HTML" className="py-2" />
                </div>
                <hr className="my-10" />
                
                <div className="px-2">
                    <h2 className="text-2xl pb-3">Deklarasi &lt;!DOCTYPE&gt;</h2>
                    <p>
                        Deklarasi mewakili jenis dokumen, dan membantu browser menampilkan halaman web dengan benar.
                        <code className="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE&gt;</code>.
                        Itu hanya boleh muncul sekali, di bagian atas halaman (sebelum tag HTML apa pun). Deklarasi tidak peka huruf besar/kecil. 
                        <code className="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE&gt;</code>.
                        Deklarasi untuk HTML5 adalah:
                        <code className="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE html&gt;</code>.
                    </p>
                </div>
                <hr className="my-10" />
                
                <div className="px-2">
                    <h2 className="text-2xl pb-3">Judul HTML</h2>
                    <p>
                        Judul HTML didefinisikan dengan tag
                        <code className="text-red-800 bg-blue-500 px-1">&lt;h1&gt; &lt;h6&gt;</code>. <br />
                        <code className="text-red-800 bg-blue-500 px-1">&lt;h1&gt;</code>
                        mendefinisikan judul yang paling penting. mendefinisikan yang paling tidak penting judul:
                        <code className="text-red-800 bg-blue-500 px-1">&lt;h6&gt;</code>
                    </p>
                    <h2 className="mt-5 py-2 text-xl">Contoh : </h2>
                    <img src={gambarHeading} alt="Contoh Heading" className="py-2"/>
                </div>
                <hr className="my-10" />
                <div className="px-2">
                    <h2 className="text-2xl pb-3">Paragraf HTML</h2>
                    <p>
                        Paragraf HTML didefinisikan dengan tag:
                        <code className="text-red-800 bg-blue-500 px-1">&lt;p&gt;</code>.
                    </p>
                    <h2 className="mt-5 py-2 text-xl">Contoh : </h2>
                    <img src={gambarParagraph} alt="Contoh Paragraf" className="py-2"/>
                </div>
                <hr className="my-10" />
                <div className="px-2">
                    <h2 className="text-2xl pb-3">Cara Melihat Sumber HTML</h2>
                    <p>
                        Pernahkah Anda melihat halaman Web dan bertanya-tanya "Hei! Bagaimana mereka melakukan itu?"
                    </p>
                    <h2 className="mt-5 py-2 text-xl">Lihat Kode Sumber HTML:</h2>
                    <p>
                        Klik CTRL + U di halaman HTML, atau klik kanan pada halaman dan pilih "Lihat Sumber Halaman". Ini akan membuka Tab baru berisi kode sumber HTML halaman.
                    </p>
                    <h2 className="mt-5 py-2 text-xl">Periksa elemen HTML:</h2>
                    <p>
                        Klik kanan pada elemen (atau area kosong), dan pilih "Periksa" untuk melihat elemen apa yang terdiri dari (Anda akan melihat keduanya HTML dan CSS). Anda juga dapat mengedit HTML atau CSS dengan cepat di Panel Elemen atau Gaya yang terbuka.
                    </p>
                </div>
            </section>
        </>
    );
}