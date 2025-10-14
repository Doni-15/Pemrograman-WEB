export function loadHeader() {
    const header = document.querySelector('header');
    const beranda_header = document.getElementById('beranda_header');
    if (!header) return Promise.resolve();

    header.innerHTML = `
        <div class="px-5">
            <h1>Doni Rivaldo Simamora</h1>
        </div>

        <div class="flex flex-row gap-x-10 text-lg">
            <a href="../../">
                <h1 class="hover:text-slate-600">Beranda</h1>
            </a>
            <a href="../HTML/">
                <h1 class="hover:text-slate-600">HTML</h1>
            </a>
            <a href="../CSS/">
                <h1 class="hover:text-slate-600">CSS</h1>
            </a>
            <a href="../JavaScript/">
                <h1 class="hover:text-slate-600">JavaScript</h1>
            </a>
            <a href="../Tailwind CSS/">
                <h1 class="hover:text-slate-600">Tailwind CSS</h1>
            </a>
            <a href="../Kesan dan Pesan/">
                <h1 class="hover:text-slate-600">Kesan & Pesan</h1>      
            </a>
        </div>
    `;

    return Promise.resolve();
}