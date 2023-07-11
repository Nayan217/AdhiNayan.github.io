/* ======Toggle icon navbar==========*/
let menuIcon = document.querySelector("#menu-Icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


/* ======scroll section active link==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });



  /* ======scroll section active link==========*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);


  /* ======remove toggle icon and navbar when clicked navbar link(scroll)==========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};



/* ====== scroll reveal ==========*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" }); 
ScrollReveal().reveal(
  ".home-img, .services-container, .projects-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });



/* ====== scroll reveal ==========*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Short Video Editor", "Casual Gamer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 800,
  loop: true,
});


// About-"read more"
function readAbout() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var moreBtn = document.getElementById("Read-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreBtn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreBtn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



/* =========== Email ========== */
var btn = document.getElementById("mail-submit");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("contact-name").value;
  var email = document.getElementById("contact-email").value;
  var number = document.getElementById("contact-number").value;
  var subject = document.getElementById("contact-subject").value;
  var message = document.getElementById("contact-text").value;
  var body =
    "name: " +
    name +
    "<br/>email: " +
    email +
    "<br/>number: " +
    number +
    "<br/>subject: " +
    subject +
    "<br/>message: " +
    message;

  Email.send({
    SecureToken: "49d1bc06-140e-4e1a-a35f-b73409ae669f",
    To: "efootball2021point@gmail.com",
    From: "adhinayan75@gmail.com",
    Subject: "Contact Message",
    Body: body,
  }).then((message) => alert(message));
});