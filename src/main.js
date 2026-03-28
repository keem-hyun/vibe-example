import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
  });

  const nav = document.querySelector("nav");
  if (!nav) {
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("bg-[#030303]/90", "shadow-lg");
      nav.classList.remove("bg-transparent");
    } else {
      nav.classList.remove("bg-[#030303]/90", "shadow-lg");
      nav.classList.add("bg-transparent");
    }
  });
});
