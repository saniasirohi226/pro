
gsap.from(".leftgold-frame", {
  scrollTrigger: {
    trigger: ".chef-image",
    start: "top 80%",
  },
  scaleY: 0,
  transformOrigin: "top",
  duration: 1,
  ease: "power2.out",
});
gsap.from(".rightgold-frame", {
  scrollTrigger: {
    trigger: ".chef-image",
    start: "top 80%",
  },
  scaleY: 0,
  transformOrigin: "top",
  duration: 1,
  ease: "power2.out",
});

// Register plugin
gsap.registerPlugin(ScrollTrigger);

/* HEADINGS & TEXT*/
gsap.utils.toArray(".fade-up").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

/* LEFT / RIGHT ANIMATIONS*/
gsap.utils.toArray(".fade-left").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

gsap.utils.toArray(".fade-right").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

/*AWARDS STAGGER*/
gsap.from(".award", {
  scrollTrigger: {
    trigger: ".awards",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

/* LAUREL ICON */
gsap.to(".laurel", {
  rotate: 360,
  duration: 20,
  repeat: -1,
  ease: "linear",
});

/* SIGNATURE*/
gsap.from(".signature", {
  scrollTrigger: {
    trigger: ".signature",
    start: "top 90%",
  },
  y: 20,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.registerPlugin(ScrollTrigger);

// Section fade-in
gsap.from(".gallery-text", {
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top 70%",
  },
  opacity: 0,
  x: -60,
  duration: 1,
  ease: "power3.out",
});

//Imagesreveal
gsap.from(".img-box", {
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 75%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

// Hover overlay
document.querySelectorAll(".img-box").forEach(box => {
  const overlay = box.querySelector(".overlay");

  box.addEventListener("mouseenter", () => {
    gsap.to(overlay, { opacity: 1, duration: 0.4 });
    gsap.to(box.querySelector("img"), { scale: 1.1, duration: 0.4 });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(overlay, { opacity: 0, duration: 0.4 });
    gsap.to(box.querySelector("img"), { scale: 1, duration: 0.4 });
  });
});

//Scroll buttons
const gallery = document.getElementById("gallery");

document.getElementById("nextBtn").onclick = () =>
  gallery.scrollBy({ left: 300, behavior: "smooth" });

document.getElementById("prevBtn").onclick = () =>
  gallery.scrollBy({ left: -300, behavior: "smooth" });

gsap.to(".img-box:first-child .scroll-arrow", {
  x: 5,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut"
});

const frame = document.querySelector(".frame");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  frame.style.transform = `translate(${scrollY * 0.03}px, ${
    scrollY * 0.03
  }px)`;
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    if(email) {
        alert(`Thank you for subscribing with: ${email}`);
        this.reset();
    }
});

// reservation form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic check (HTML required already does most work)
    alert("Table reserved successfully ✨");

    // Reset form
    form.reset();

    // Reset custom dropdown text (if using it)
    const selected = document.querySelector(".select-selected");
    if (selected) {
      selected.textContent = "Select guests";
    }
  });
});
// Newsletter
document.querySelector(".newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Subscribed successfully!");
});

  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }

 const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
    });
  });