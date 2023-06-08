const observerFooter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add("slide-in", intersecting);
    }
  });
});

export { observerFooter };
