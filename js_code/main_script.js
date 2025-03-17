const menu = document.createElement('div');
menu.className = 'menu';

const title = document.createElement('div');
title.className = 'title';
const h1 = document.createElement('h1');
h1.textContent = 'CASINO INVESTOR';
title.appendChild(h1);

const listMenu = document.createElement('div');
listMenu.className = 'list_menu';
const links = [
    { href: 'Regist.html', text: 'Registration' },
    { href: 'zadn.html', text: 'Zadanie' },
    { href: 'index.html', text: 'Roulette' },
    { href: 'About_me.html', text: 'About me' },
    { href: 'rotation_button.html', text: 'Rotation Button'}
];
links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.className = 'menu-link';
    listMenu.appendChild(a);
});

menu.appendChild(title);
menu.appendChild(listMenu);
const styles = `
.menu {
    width: 100%;
    background: rgba(20, 20, 20, 0.5);
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.title h1 {
    color: #00ff00;
    text-align: center;
}

.list_menu {
    text-align: center;
    margin: 20px 0;
}

.list_menu a {
    color: #00ff00;
    margin: 0 15px;
    text-decoration: none;
    font-size: 20px;
    transition: all 0.3s ease;
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
document.body.appendChild(menu);