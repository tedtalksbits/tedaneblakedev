const scrollSpy = () => {



   const sections = document.querySelectorAll('.section');

   window.addEventListener('scroll', () => {
      let currentSection = '';
      let value = window.scrollY;
      sections.forEach(section => {

         const sectionHeight = section.clientHeight;
         const sectionTop = section.offsetTop;
         if (value >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id')
         }
      })

      const allLinks = document.querySelectorAll('.my-link');
      allLinks.forEach(link => {
         link.classList.remove('active');
         if (link.classList.contains(currentSection)) {
            link.classList.add('active');
         }

      });
      console.log(currentSection);

   })



}

export default scrollSpy;

