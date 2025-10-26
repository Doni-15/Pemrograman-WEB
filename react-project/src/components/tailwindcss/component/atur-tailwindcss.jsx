export function PengaturanTailwindCSS() {
    return (
        <>
            <section>
                <h2 className="text-center font-bold text-4xl">Pengaturan Editor</h2>

                <div className="p-2">
                    <h2 className="text-2xl py-5">Dukungan Sintaks</h2>
                    <p>
                        CSS Tailwind menggunakan sintaks CSS kustom seperti{" "}
                        <code className="text-red-800 px-1">@theme</code>,{" "}
                        <code className="text-red-800 px-1">@variant</code>, dan{" "}
                        <code className="text-red-800 px-1">@source</code>.  
                        Di beberapa editor, ini dapat memicu peringatan atau kesalahan karena aturan ini tidak dikenali.
                    </p>
                    <br />
                    <p>
                        Jika Anda menggunakan VS Code, plugin{" "}
                        <span className="underline font-bold">Tailwind CSS IntelliSense</span> resmi kami
                        menyertakan mode bahasa CSS Tailwind khusus yang memiliki dukungan untuk semua aturan
                        dan fungsi khusus yang digunakan Tailwind.
                    </p>
                    <br />
                    <p>
                        Dalam beberapa kasus, Anda mungkin perlu menonaktifkan linting/validasi CSS asli
                        jika editor Anda sangat ketat tentang sintaks yang diharapkan dalam file CSS Anda.
                    </p>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-5">IntelliSense untuk VS Code</h2>
                    <p>
                        Ekstensi{" "}
                        <span className="underline font-bold">Tailwind CSS IntelliSense</span> resmi untuk
                        Visual Studio Code meningkatkan pengalaman pengembangan Tailwind dengan menyediakan
                        fitur canggih seperti pelengkapan otomatis, penyorotan sintaks, dan linting.
                    </p>
                    <br />

                    <p className="flex flex-row text-wrap py-1">
                        <span className="font-bold">● Pelengkapan otomatis:</span>{" "}
                        memberikan saran cerdas untuk kelas utilitas, serta fungsi dan arahan CSS.
                    </p>

                    <p className="flex flex-row text-wrap py-1">
                        <span className="font-bold">● Linting:</span>{" "}
                        menyoroti kesalahan dan potensi bug di CSS dan markup Anda.
                    </p>

                    <p className="flex flex-row text-wrap py-1">
                        <span className="font-bold">● Pratinjau kursor:</span>{" "}
                        menampilkan CSS lengkap untuk kelas utilitas saat Anda mengarahkan kursor ke atasnya.
                    </p>

                    <p className="flex flex-row text-wrap py-1">
                        <span className="font-bold">● Penyorotan sintaks:</span>{" "}
                        memastikan fitur Tailwind yang menggunakan sintaks CSS kustom disorot dengan benar.
                    </p>
                </div>

                <hr className="my-10" />

                <div className="px-2">
                    <h2 className="text-2xl pb-5">Penyortiran Kelas dengan Prettier</h2>
                    <p>
                        Kami memelihara plugin resmi Prettier untuk Tailwind CSS yang secara otomatis mengurutkan
                        kelas Anda mengikuti urutan kelas yang direkomendasikan. <br /> <br />
                        Ini bekerja dengan mulus dengan konfigurasi Tailwind khusus, dan karena ini hanya plugin
                        Prettier, maka berfungsi di mana pun Prettier bekerja — termasuk setiap editor dan IDE
                        populer, dan tentu saja di baris perintah.
                    </p>
                </div>
            </section>
        </>
    );
}