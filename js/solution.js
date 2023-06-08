const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    const solution = document.querySelector("#solution");
    if (intersecting) {
      solution.classList.add("slide-in", intersecting);
    }
  });
});

export { observer };
