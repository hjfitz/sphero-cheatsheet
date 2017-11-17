// fetch badboys from DOM
const items = document.querySelectorAll('.menu-item');
const sideNav = document.querySelector('.sidenav');

// instantiate a mobile side-nav
const instance = new M.Sidenav(sideNav);

// use a cheeky bit of jq to scroll nicely
// for those who don't support elem#scrollintoview({ smooth })
const jump = ({ target }) => {
  const { jump: sel } = target.dataset;
  const offset = $(sel).offset().top - 80;
  $('html, body').animate({ scrollTop: offset}, 750);
}

// add click listeners
items.forEach(item => {
  item.addEventListener('click', jump);
});
