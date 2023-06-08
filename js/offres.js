const observerOffresTitle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add("slide-in", intersecting);
    }
  });
});

const observerOffresContainer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add("slide-in", intersecting);
    }
  });
});

export { observerOffresTitle, observerOffresContainer };
