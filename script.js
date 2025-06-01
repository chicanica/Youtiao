document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-btn'); 
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      document.querySelectorAll('.menu-list').forEach(list => {
        list.style.display = 'none';
      });
      document.getElementById(category).style.display = 'grid';
    });
  });
});
