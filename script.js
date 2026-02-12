<script>
  // Only add this if you don't already have a hamburger button in your HTML
  // First, add this to your navbar HTML: 
  // <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
  // <div class="mobile-menu" id="mobileMenu">
  //   <a href="#home">Home</a>
  //   <a href="#services">Services</a>
  //   <a href="#work">Work</a>
  //   <a href="#about">About</a>
  //   <a href="#contact">Contact</a>
  // </div>

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
</script>
