const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    const solution = document.querySelector("#solution");
    solution.classList.toggle("slide-in", intersecting);
  });
});

export { observer };
