export function loadFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return Promise.resolve();
    
    footer.innerHTML = `
        <div class="section px-10 pb-2 pt-5" style="background: var(--warna-k-1);">
            <h1 class="px-5">
                Doni Rivaldo Simamora
            </h1>
        </div>

        <div class="section px-10 pb-10" style="background: var(--warna-k-2);">
            <div class="p-5 w-3/5 flex flex-row gap-5 justify-between text-left h-auto">
                <div class="w-1/3 flex flex-col gap-3">
                    <a href="../HTML/" class="text-lg font-semibold hover:underline"> HTML </a>
                    <a href="../CSS/" class="text-lg font-semibold hover:underline"> CSS </a>
                    <a href="../JavaScript/" class="text-lg font-semibold hover:underline"> JavaScript </a>

                    <div class="flex flex-row gap-5 mt-8">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="../../src/gambar/whatsapp.svg" alt="WhatsApp" title="WhatsApp" class="w-9">
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="../../src/gambar/instagram.svg" alt="Instagram"  title="Instagram" class="w-9">
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="../../src/gambar/email.svg" alt="Email" title="Email" class="w-9">
                        </a>
                    </div>
                </div>
                <div class="w-1/3">
                    <a href="../Tailwind CSS/" class="text-lg font-semibold hover:underline">
                        Tailwind CSS
                    </a>
                </div>
                <div class="w-1/3">
                    <a href="../Kesan dan Pesan/" class="text-lg font-semibold hover:underline">
                        Kesan dan Pesan
                    </a>
                </div>
            </div>

            <div class="px-10 py-10 w-2/5 flex flex-row gap-5 justify-between text-left h-auto">
                <div class="w-full h-auto">
                    <a href="https://maps.app.goo.gl/RrTCkrNwUQjvYUas6" target="_blank" rel="noopener noreferrer" title="Alamat" class="text-lg font-semibold hover:underline">
                        <p class="leading-5">
                            Jalan Universitas No. 9 Universitas Sumatera Utara, Medan, 20222, Sumatera Utara
                        </p>
                    </a>

                    <!-- telepon -->
                    <div class="flex flex-row my-2">
                        <img class="w-8 mr-3" src="../../src/gambar/whatsapp.svg" alt="whatsapp">
                        <a href="https://wa.me/6282217506360" target="_blank" rel="noopener noreferrer" title="WhatsApp" class="text-lg font-semibold hover:underline">
                            +62-822-1750-6360
                        </a>
                    </div>

                    <!-- instagram -->
                    <div class="flex flex-row my-2">
                        <img class="w-8 mr-3" src="../../src/gambar/instagram.svg" alt="instagram">
                        <a href="https://www.instagram.com/donisimamora15?igsh=amlvcGd0YzQ5bHpl" target="_blank" rel="noopener noreferrer" title="Instagram" class="text-lg font-semibold hover:underline"> 
                            @donisimamora15
                        </a>
                    </div>
                    
                    <!-- email -->
                    <div class="flex flex-row my-2">
                        <img class="w-8 mr-3" src="../../src/gambar/email.svg" alt="email">
                        <a href="mailto:donirivaldo@students.usu.ac.id" target="_blank" rel="noopener noreferrer" title="Email" class="text-lg font-semibold hover:underline"> 
                            donirivaldo@students.usu.ac.id
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    return Promise.resolve();
}