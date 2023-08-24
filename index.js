const tabs = document.getElementsByClassName("menu-item");
const menuMobileEl = document.getElementsByClassName("IC-header__menu");
const logoEl = document.getElementsByClassName("IC-header__logo");
const iconMenuEl = document.getElementsByClassName("IC-header__icon");
const iconCloseEl = document.getElementsByClassName("IC-header__icon-close");
const contentEl = document.getElementsByClassName("IC-content");
const authorEl = document.getElementsByClassName("IC-author");

const handleActive = (event) => {
  for (let index = 0; index < tabs.length; index++) {
    tabs[index].className = tabs[index].className.replace(" active", "");
  }

  event.currentTarget.className += " active";

  menuMobileEl[0].className.includes(" d-flex") && (menuMobileEl[0].className = menuMobileEl[0].className.replace(" d-flex", ""));
  logoEl[0].className.includes(" d-none") && (logoEl[0].className = logoEl[0].className.replace(" d-none", ""));
  iconMenuEl[0].className.includes(" d-none") && (iconMenuEl[0].className = iconMenuEl[0].className.replace(" d-none", ""));
  iconCloseEl[0].className.includes(" d-block") && (iconCloseEl[0].className = iconCloseEl[0].className.replace(" d-block", ""));
  contentEl[0].className.includes(" d-none") && (contentEl[0].className = contentEl[0].className.replace(" d-none", ""));
  authorEl[0].className.includes(" d-none") && (authorEl[0].className = authorEl[0].className.replace(" d-none", ""));
}

const handleOpenMenu = () => {


  menuMobileEl[0].className += " d-flex";
  logoEl[0].className += " d-none";
  iconMenuEl[0].className += " d-none";
  iconCloseEl[0].className += " d-block";
  contentEl[0].className += " d-none";
  authorEl[0].className += " d-none";
}

const handleClose = () => {


  menuMobileEl[0].className = menuMobileEl[0].className.replace(" d-flex", "");
  logoEl[0].className = logoEl[0].className.replace(" d-none", "");
  iconMenuEl[0].className = iconMenuEl[0].className.replace(" d-none", "");
  iconCloseEl[0].className = iconCloseEl[0].className.replace(" d-block", "");
  contentEl[0].className = contentEl[0].className.replace(" d-none", "");
  authorEl[0].className = authorEl[0].className.replace(" d-none", "");
}