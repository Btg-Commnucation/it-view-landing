const observerContent = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.classList.toggle("slide-in", intersecting);
  });
});

export { observerContent };
