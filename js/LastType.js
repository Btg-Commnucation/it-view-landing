const handleLastType = (elements) => {
  let lastType = elements[elements.length - 1];
  lastType.classList.add("last-type");
};

export { handleLastType };
