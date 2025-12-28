// ---------------------------------------------
// SELETORES PRINCIPAIS
// ---------------------------------------------
const header = document.querySelector('.header');
const barsBox = document.querySelector('.bars-box');
const navLinks = document.querySelectorAll('.nav-link');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const imgSlide = document.querySelector('.img-slide');
const projectDetail = document.querySelectorAll('.project-detail');

// ---------------------------------------------
// MENU MOBILE
// ---------------------------------------------
menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

// ---------------------------------------------
// FUNÇÃO: ATIVAR PÁGINA / SEÇÃO
// ---------------------------------------------
const activePage = (idx = 0) => {
    // Header e bars com leve delay
    header?.classList.remove('active');
    barsBox?.classList.remove('active');

    setTimeout(() => {
        header?.classList.add('active');
        barsBox?.classList.add('active');
    }, 100);

    // Remove todas as classes ativas de links e seções
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Ativa link e seção
    navLinks[idx]?.classList.add('active');
    sections[idx]?.classList.add('active');

    // Fecha menu mobile
    menuIcon?.classList.remove('bx-x');
    navBar?.classList.remove('active');
};

// ---------------------------------------------
// NAVEGAÇÃO ENTRE LINKS
// ---------------------------------------------
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage(idx);
        }
    });
});

// ---------------------------------------------
// LOGO VOLTA PARA HOME
// ---------------------------------------------
logoLink?.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage(0);
    }
});

// ---------------------------------------------
// RESUMO / EXPERIÊNCIAS
// ---------------------------------------------
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Botões
        resumeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Conteúdo
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx]?.classList.add('active');
    });
});

// ---------------------------------------------
// CARROSSEL DE PROJETOS
// ---------------------------------------------
let index = 0;

const updateProject = () => {
    if (!imgSlide) return;

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectDetail.forEach(detail => detail.classList.remove('active'));
    projectDetail[index]?.classList.add('active');

    arrowLeft?.classList.toggle('disabled', index === 0);
    arrowRight?.classList.toggle('disabled', index === projectDetail.length - 1);
};

arrowRight?.addEventListener('click', () => {
    if (index < projectDetail.length - 1) index++;
    updateProject();
});

arrowLeft?.addEventListener('click', () => {
    if (index > 0) index--;
    updateProject();
});

// Inicializa carrossel
updateProject();