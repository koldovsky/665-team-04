(function () {
  const iconBurger = document.querySelector(".burger");
  const navigationsBody = document.querySelector(".navigate-wrapper");
  const icon = document.querySelector("#burger");
  iconBurger.addEventListener("click", function () {
    console.log(typeof(icon.src));
  if(icon.src.includes("img/burger-close.png")) {
    icon.src="img/burger-menu.png";
  }else {
    icon.src="img/burger-close.png";
  }
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navigation__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      if (iconBurger.classList.contains("active")) {
        icon.src="img/burger-menu.png";
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
      }
    }
    );
  });
})();
