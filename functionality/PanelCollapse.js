const leftPanel = document.getElementById('leftPanel');
        const expandButton = document.getElementById('expandButton');
        const icon = expandButton.querySelector('i'); // Get the <i> tag inside the button

        expandButton.addEventListener('click', () => {
        leftPanel.classList.toggle('collapsed');

        // Toggle the icon direction based on the panel state
        if (leftPanel.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });