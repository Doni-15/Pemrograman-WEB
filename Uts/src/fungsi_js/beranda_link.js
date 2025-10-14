function link_beranda() {
    const id_komponen = ['beranda', 'html', 'css', 'js', 'tailwind', 'kesan'];
    const path_link = ['', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Kesan dan Pesan'];

    for (let i = 0; i < id_komponen.length; i++) {
        card_beranda(i);
    }

    function card_beranda(i) {
        if(i != 0 && i != id_komponen.length - 1){
            const link_id = document.getElementById(`${id_komponen[i]}_card`);
            link_id.addEventListener('click', () => {
                window.location.href = `./component/${path_link[i]}/`;
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    link_beranda();
});