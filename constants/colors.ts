type ColorKeyType =
  | 'primary500'
  | 'primary600'
  | 'primary700'
  | 'primart800'
  | 'accent500';

type ColorType = {
  [key in ColorKeyType]: string;
};

const Colors: ColorType = {
  primary500: '#72063c',
  primary600: '#640233',
  primary700: '#4e0329',
  primart800: '#4e0329',
  accent500: '#ddb52f',
};

export default Colors;
