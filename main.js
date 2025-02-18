// Get elements
const burgerMenu = document.getElementById("burgerMenu");
const overlay = document.getElementById("overlay");
const overlayX = document.getElementById("overlayX");
const overlayLinks = document.querySelectorAll(".overlay-links ul li"); // All list items in the overlay
const kompetenzenLinks = document.querySelectorAll(
  ".kompetenzen-links-wrapper a"
);
const menuLinks = document.querySelectorAll(".menu a");
const overlayHeroLogo = document.getElementById("overlay_hero_logo");
const overlayHeroSlogan = document.getElementById("overlay_hero_slogan");
const overlayContactStreet = document.getElementById("street");
const overlayContactCity = document.getElementById("city");
const overlayContactState = document.getElementById("state");
const overlayContactMail = document.getElementById("contact-email");
const overlayContactTelefon = document.getElementById("contact-telefon");
const linkedInLogoOverlay = document.getElementById("linkedIn-logo-overlay");
const facebookLogoOverlay = document.getElementById("facebook-logo-overlay");
const overlayLogoLine = document.getElementById("overlay-logo-line");
const überParagraphs = document.querySelectorAll(".über-paragraph h4");
const bioLinks = document.querySelectorAll(".bio-links-block div i");
//Logo on load

gsap.from(".logo", {
  opacity: 0,
  x: -150,
  duration: 0.5,
  delay: 0.3,
});

gsap.fromTo(
  menuLinks,
  { opacity: 0 }, // Start from hidden and offset
  {
    opacity: 1,
    y: 0, // Animate to original position
    duration: 1.5,
    stagger: 0.1, // Add stagger effect for sequential appearance
    ease: "power2.inOut",
  }
);

//Burger menu on load
gsap.from(".burger-menu", {
  opacity: 0,
  x: 150,
  duration: 0.7,
  delay: 0.3,
});

//Home page on load title
gsap.from(".hero h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.5, // Delay to start after page load
});

//Home page paragraph
gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1, // Delayed animation
});

// Toggle menu on burger click
burgerMenu.addEventListener("click", () => {
  // Toggle burger menu to fade out
  burgerMenu.classList.toggle("open");

  // Use GSAP's Tween to animate the overlay with ease-in effect
  if (overlay.style.top === "0px") {
    // Slide up (hide the overlay) with ease-out
    gsap.to(overlay, { top: "-200%", duration: 0.5, ease: "power2.out" });

    // Fade out the "X" when closing overlay
    gsap.to(overlayX, { opacity: 0, duration: 0.3 });

    // Reverse the links animation (fade and slide down)
    gsap.to(overlayLinks, {
      opacity: 0,
      y: 50, // Slide them down
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(overlay, { top: " -200%", duration: 0.5, ease: "power2.out" });
      },
    });
  } else {
    // Slide down (show the overlay) with ease-in
    gsap.to(overlay, { top: "0", duration: 0.5, ease: "power2.in" });

    // Fade in the "X" when opening overlay
    gsap.to(overlayX, { opacity: 1, duration: 0.3 });

    //Fade in overlay LOGO
    gsap.fromTo(
      overlayHeroLogo,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.4, delay: 0.6 }
    );

    //Fade in overlay LOGO
    gsap.fromTo(
      overlayLogoLine,
      {
        height: 0,
      },
      { height: "40%", duration: 1.4, delay: 0.8 }
    );

    //Fade in overlay slogan

    gsap.fromTo(
      overlayHeroSlogan,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.4,
        delay: 0.8,
      }
    );

    //Fade in overlay Contact

    gsap.fromTo(
      overlayContactStreet,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.4, delay: 1 }
    );

    gsap.fromTo(
      overlayContactCity,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.4, delay: 1.2 }
    );

    gsap.fromTo(
      overlayContactState,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.4, delay: 1.4 }
    );

    gsap.fromTo(
      overlayContactMail,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.4, delay: 1.6 }
    );

    gsap.fromTo(
      overlayContactTelefon,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.4, delay: 1.8 }
    );

    // Animate the links (fade in and slide up)
    gsap.fromTo(
      overlayLinks,
      { opacity: 0, y: 550 }, // Start from hidden and offset
      {
        opacity: 1,
        y: 0, // Animate to original position
        duration: 1.5,
        stagger: 0.1, // Add stagger effect for sequential appearance
        ease: "power2.inOut",
      }
    );

    //Icons animation
    gsap.fromTo(
      linkedInLogoOverlay,
      {
        opacity: 0,
      },
      { opacity: 1, y: 0, duration: 1, delay: 1.6 }
    );

    gsap.fromTo(
      facebookLogoOverlay,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, delay: 1.8 }
    );
  }
});

// Close overlay when clicking on the "X"
overlayX.addEventListener("click", () => {
  // Animate the links (fade and slide down)
  gsap.to(overlayLinks, {
    opacity: 0,
    y: 50, // Slide them down
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.out",
    onComplete: () => {
      // After links animation is completed, hide the overlay container
      gsap.to(overlay, { top: "-100%", duration: 0.2, ease: "power2.out" });
      // Fade out the "X" when the overlay closes
      gsap.to(overlayX, { opacity: 0, duration: 0.3 });
    },
  });

  gsap.to(overlayHeroLogo, {
    opacity: 0,

    duration: 0.2,
    stagger: 0.2,
    delay: 0.6,
    ease: "power2.out",
    onComplete: () => {
      // After links animation is completed, hide the overlay container
      gsap.to(overlay, { top: "-100%", duration: 0.2, ease: "power2.out" });
      // Fade out the "X" when the overlay closes
      gsap.to(overlayX, { opacity: 0, duration: 0.3 });
    },
  });

  gsap.to(overlayLogoLine, {
    height: "0%",
    duration: 0.4,
    stagger: 0.3,
    delay: 0.2,
    onComplete: () => {
      // After links animation is completed, hide the overlay container
      gsap.to(overlay, { top: "-100%", duration: 0.2, ease: "power2.out" });
      // Fade out the "X" when the overlay closes
      gsap.to(overlayX, { opacity: 0, duration: 0.3 });
    },
  });

  // Reset burger menu to visible state
  burgerMenu.classList.remove("open");
});

// Kompetenze page-----------------

gsap.to(".kompetenzen-intro-text h1", {
  opacity: 1,
  duration: 1,
  delay: 0.7,
});

gsap.to(".kompetenzen-intro-text p", {
  opacity: 1,
  duration: 1,
  delay: 0.8,
});

// Function to animate the Ion icon
function animateIcon() {
  const icon = document.querySelector(".animate-icon");
  if (icon) {
    gsap.fromTo(
      icon,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 2,
        duration: 1.5,
        ease: "power3.out",
        repeat: -1,
        delay: 1.5,
      }
    );
  }
}

// Call the animateIcon function when the page loads
window.onload = animateIcon;

gsap.to(".arrow-wrapper h3", {
  opacity: 1,
  duration: 1,
  delay: 1.2,
});

// Kompetenzen Inhalt--------------------------

gsap.fromTo(
  kompetenzenLinks,
  { opacity: 0 }, // Start from hidden and offset
  {
    opacity: 1,
    y: 0, // Animate to original position
    duration: 1.5,
    stagger: 0.1, // Add stagger effect for sequential appearance
    ease: "power2.inOut",
  }
);

//Projektleitung Inhalt--------------------------

gsap.from(".projektleitung-intro-text-block-one", {
  opacity: 0,
  x: 50,
  duration: 0.5,
  delay: 0.3,
});

gsap.from(".projektleitung-intro-text-block-two", {
  opacity: 0,
  x: 50,
  duration: 0.5,
  delay: 0.6,
});

gsap.from(".projektleitung-block-first h1", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.6,
});

gsap.from(".projekt-title-wrapper h1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.6,
});

gsap.from(".inhalt-detail-text-first-block  h4", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.6,
});

gsap.from(".inhalt-detail-text-first-block  h5", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.8,
});

gsap.from(".inhalt-detail-text-second-block  h4", {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.6,
});

gsap.from(".inhalt-detail-text-second-block  h5", {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.6,
});

gsap.from(".projektleitung-ende-title-wrapper h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.6,
});

gsap.from(".projektleitung-ende-detail-first-block h1 ", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.6,
});

gsap.from(".projektleitung-ende-detail-first-block p ", {
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

gsap.from(".projektleitung-ende-detail-second-block-text-wrapper h5", {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.6,
});

// ----------------Biographie-------------------------//

gsap.from(".über-block-first h1", {
  opacity: 0,
  x: -50,
  duration: 1,
});

gsap.fromTo(
  überParagraphs,
  { opacity: 0 }, // Start from hidden and offset
  {
    opacity: 1,
    y: 0, // Animate to original position
    duration: 1.5,
    stagger: 0.1, // Add stagger effect for sequential appearance
    ease: "power2.inOut",
  }
);

gsap.from(".first-block-bio h1", {
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

gsap.from(".bio-paragraph h4", {
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

gsap.from(".bio-img", {
  opacity: 0,
  duration: 1.4,
  delay: 1,
});

gsap.fromTo(
  bioLinks,
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1.6,
    delay: 0.6,
    stagger: 0.1,
    ease: "power2.inOut",
  }
);
