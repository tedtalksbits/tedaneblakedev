const scrollSpy = () => {
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navbar = document.getElementById("navbar");
    let currentSection = "";
    let value = window.scrollY;

    if (value < 900) {
      navbar.style.background = "transparent";
    } else {
      navbar.style.background = "#000000a1";
    }

    sections.forEach((section) => {
      const sectionHeight = section.clientHeight;
      const sectionTop = section.offsetTop;
      if (value >= sectionTop - sectionHeight / 4.2) {
        currentSection = section.getAttribute("id");
      }
    });

    const allLinks = document.querySelectorAll(".my-link");
    allLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.classList.contains(currentSection)) {
        link.classList.add("active");
      }
    });
  });
};

export default scrollSpy;
