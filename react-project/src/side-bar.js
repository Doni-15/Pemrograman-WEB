export function sideBar() {
    const navigasi_kiri = document.getElementById('navigasi_kiri_html');
    const footer = document.getElementById('footer');

    if (!navigasi_kiri || !footer) {
        console.log(`Gagal menjalankan fungsi sideBar()`)
        return;
    }

    const sidebarTop = navigasi_kiri.getBoundingClientRect().top + window.scrollY;
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const maxHeight = window.innerHeight * 0.9;
    const availableHeight = footerTop - sidebarTop;

    navigasi_kiri.style.height = `${Math.min(availableHeight, maxHeight)}px`;
}

window.addEventListener('resize', sideBar);
window.addEventListener('scroll', sideBar);

document.addEventListener('DOMContentLoaded', sideBar);