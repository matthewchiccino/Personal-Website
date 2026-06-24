function initPanelCollapse() {
    const leftPanel = document.getElementById('leftPanel');
    const expandButton = document.getElementById('expandButton');
    if (!leftPanel || !expandButton) return;

    const icon = expandButton.querySelector('i');

    expandButton.addEventListener('click', () => {
        leftPanel.classList.toggle('collapsed');

        if (leftPanel.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });
}

function prefixRelativeLinks(root, base) {
    root.querySelectorAll('a[href]').forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
            link.setAttribute('href', base + href);
        }
    });
}

function markActiveLink(root) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    root.querySelectorAll('a[href]').forEach((link) => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

const script = document.currentScript;
const base = script?.dataset.base || '';

const mount = document.getElementById('left-panel-mount');
if (mount) {
    fetch(base + 'components/left-panel.html')
        .then((response) => response.text())
        .then((html) => {
            mount.outerHTML = html.trim();
            prefixRelativeLinks(document.getElementById('leftPanel'), base);
            markActiveLink(document.getElementById('leftPanel'));
            initPanelCollapse();
        });
}

const footerMount = document.getElementById('footer-mount');
if (footerMount) {
    fetch(base + 'components/footer.html')
        .then((response) => response.text())
        .then((html) => {
            footerMount.outerHTML = html.trim();
        });
}
