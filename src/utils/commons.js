export const preventOuterClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
