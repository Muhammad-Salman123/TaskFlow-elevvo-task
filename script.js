const revealSections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.1,
  }
);

revealSections.forEach((section) => {
  observer.observe(section);
});
