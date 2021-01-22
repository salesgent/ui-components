const buttonColor = (theme) => {
  const color = theme.colors.primary; //'rgb(84, 176, 22)';

  return `
  border-color: ${color} !important;
  background: ${color} !important;
 `;
};

export const primaryButtonStyle = ({ theme }) => `
    ${buttonColor(theme)}

    &:hover,
    &:focus,
    &:active {
      ${buttonColor(theme)}
    }
`;
