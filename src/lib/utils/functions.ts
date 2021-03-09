export const hexToRGB = (value: string) => {
  value = value.replace(/#/g, '');

  if (value.length > 6) {
    throw new Error(`Only six-digit 'HEX' colors are allowed!`);
  }
  if (value.length === 3) {
    value = value
      .split('')
      .map((value) => value + value)
      .join('');
  }

  const splitHexValues = value.match(/.{1,2}/g);

  return [
    parseInt(splitHexValues[0], 16),
    parseInt(splitHexValues[1], 16),
    parseInt(splitHexValues[2], 16),
  ];
};

export const processCategoryTitle = (value: string): string => {
  const capitalizaFirstLetter = value.charAt(0).toUpperCase() + value.slice(1);

  return capitalizaFirstLetter.replace(/-/g, ' ');
};

export const generateAnchorId = (value: string): string => {
  return value.toLocaleLowerCase().replace(/\s/g, '-').trim();
};
