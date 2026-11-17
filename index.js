const accordionItems = document.querySelectorAll('.pesquisa-item');

accordionItems.forEach((item) => {
  const button = item.querySelector('.accordion-toggle');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    accordionItems.forEach((element) => {
      const shouldOpen = element === item && !isOpen;
      element.classList.toggle('active', shouldOpen);
      element.querySelector('.accordion-toggle').setAttribute('aria-expanded', String(shouldOpen));
    });
  });
});
