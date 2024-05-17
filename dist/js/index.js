let themeIcon = document.querySelector(".toggle");
let theme = localStorage.getItem('theme');
if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  themeIcon.setAttribute('cheked',true)
}
themeIcon.addEventListener("change", function () {
  if (theme === 'ligth') {
    theme = 'dark';
    localStorage.setItem('theme',theme)
    document.documentElement.classList.add('dark')
  } else {
    theme = 'ligth';
    localStorage.setItem('theme',theme)
    document.documentElement.classList.remove('dark')
  }
});
