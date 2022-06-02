const dropdown = document.getElementById('dropdown');
const dropdownTitle = document.getElementById('dropdown-title');
const dropdownOpts = document.getElementById('dropdown-opts');
const dropdownItems = document.querySelectorAll('.dropdown__option');
const dropdownIcon = document.getElementById('dropdown-icon');

dropdown.addEventListener('click', (e) => {
  dropdownOpts.classList.toggle('dropdown__options--active');

  const isClose = dropdownIcon.classList.contains('fa-chevron-down');

  isClose
    ? dropdownIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
    : dropdownIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');

  const el = e.target;
  const attribute = el.getAttribute('data-city');

  if (attribute) {
    dropdownTitle.textContent = el.textContent;
    dropdownItems.forEach((element) => {
      if (element.classList.contains('dropdown__option--active')) {
        element.classList.remove('dropdown__option--active');
      }
    });

    el.classList.add('dropdown__option--active');
    el.addEventListener('click', () => {
      isClose
        ? dropdownIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
        : dropdownIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    });
  }
});
