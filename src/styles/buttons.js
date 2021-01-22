const buttonColor = (theme) => {
  const color = theme.colors.primary; //'rgb(84, 176, 22)';

  return `
  border-color: ${color} !important;
  background: ${color} !important;
 `;
};

const buttonSVGStyles = (theme) => `
  svg {
    fill: ${theme.colors.white}
  }  
`;

export const primaryButtonStyle = ({ theme }) => `
    ${buttonColor(theme)}

    &:hover,
    &:focus,
    &:active {
      ${buttonColor(theme)}
    }
    
    ${buttonSVGStyles(theme)}
`;
