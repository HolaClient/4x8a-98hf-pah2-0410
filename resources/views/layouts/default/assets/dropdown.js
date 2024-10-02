function toggleDropdown(id) {
    const dropdowns = document.querySelectorAll('[id^="dropdown."]');
    dropdowns.forEach(dropdown => {
        if (dropdown.id === `dropdown.${id}`) {
            dropdown.classList.toggle('hidden');
        } else {
            dropdown.classList.add('hidden');
        }
    });
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('[id^="dropdown."]') && !event.target.closest('[onclick^="toggleDropdown"]')) {
        const dropdowns = document.querySelectorAll('[id^="dropdown."]');
        dropdowns.forEach(dropdown => {
            dropdown.classList.add('hidden');
        });
    }
});