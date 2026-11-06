// script.js — only the parts of the site that need JavaScript.
// All page content lives in index.html, so you can edit text, skills and projects there.

// Change this if your email address changes (the form sends messages here).
const EMAIL = "sauravgaudel064@gmail.com";

// ---------- 1. Mobile menu (hamburger button) ----------
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
menu.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  }
});

// ---------- 2. Navbar shadow and back-to-top button ----------
const navbar = document.getElementById("nav");
const toTop = document.getElementById("totop");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
  toTop.classList.toggle("show", window.scrollY > 600);
});

toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0 });
});

// ---------- 3. Highlight the nav link of the section you are viewing ----------
const navLinks = document.querySelectorAll("#navlinks a");
const sections = document.querySelectorAll("main section");

const sectionWatcher = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach(function (section) {
  sectionWatcher.observe(section);
});

// ---------- 4. Fade-in when elements scroll into view ----------
// Any element with class="reveal" fades in once.
const revealWatcher = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealWatcher.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach(function (item) {
  revealWatcher.observe(item);
});

// ---------- 5. Portfolio tabs (Projects / Research) ----------
const tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (other) {
      const isThis = other === tab;
      other.setAttribute("aria-selected", isThis);
      document.getElementById("panel-" + other.dataset.tab).hidden = !isThis;
    });
  });
});



 // ---------- 6. Contact form ----------
const form = document.getElementById("form");
const statusMessage = document.getElementById("formStatus");
const sendButton = form.querySelector('button[type="submit"]');

function showStatus(text, type) {
  statusMessage.textContent = text;
  statusMessage.className = type || "";
}

// Validate form fields
function formIsValid() {
  let valid = true;

  const fields = [
    form.elements.name,
    form.elements.email,
    form.elements.subject,
    form.elements.message
  ];

  fields.forEach(function (field) {
    const errorBox = field.parentElement.querySelector(".err");
    let message = "";

    if (field.value.trim() === "") {
      message = "This field is required.";
    } else if (
      field.name === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
    ) {
      message = "Enter a valid email address.";
    }

    errorBox.textContent = message;
    field.setAttribute("aria-invalid", message !== "");

    if (message !== "") valid = false;
  });

  return valid;
}

// Submit form using FormSubmit
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!formIsValid()) {
    showStatus("Please fix the highlighted fields.", "error");
    return;
  }

  // Spam protection
  if (form.elements._honey && form.elements._honey.value !== "") {
    return;
  }

  sendButton.disabled = true;
  sendButton.textContent = "Sending...";
  showStatus("");

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/" + EMAIL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(
          Object.fromEntries(new FormData(form))
        )
      }
    );

    const result = await response.json();

    if (!response.ok || String(result.success) !== "true") {
      throw new Error(result.message || "Message could not be sent.");
    }

    showStatus("Message sent successfully. Thank you!", "ok");
    form.reset();

    form.querySelectorAll("[aria-invalid]").forEach(function (field) {
      field.removeAttribute("aria-invalid");
    });

  } catch (error) {
    console.error("Form submission error:", error);

    showStatus(
      "Unable to send your message. Please try again or email " + EMAIL + ".",
      "error"
    );
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = "Send Message";
  }
});



// ---------- 7. Copyright year ----------
document.getElementById("year").textContent = new Date().getFullYear();
