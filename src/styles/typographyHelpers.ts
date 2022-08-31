import {TextStyle} from 'react-native';

// Bold
export const bodyBold: TextStyle = {
  fontFamily: 'Lato',
};

export const bodyB12: TextStyle = {
  fontSize: 12,
  fontFamily: 'Lato',
};
export const bodyB13: TextStyle = {
  fontSize: 13,
  fontFamily: 'Lato',
};

export const bodyB14: TextStyle = {
  fontSize: 14,
  fontFamily: 'Lato',
};
export const bodyB15: TextStyle = {
  fontSize: 15,
  fontFamily: 'Lato',
};
export const bodyB16: TextStyle = {
  fontSize: 16,
  fontFamily: 'Lato',
};
export const bodyB23: TextStyle = {
  fontSize: 23,
  fontFamily: 'Lato',
};

// Medium
export const bodyMedium: TextStyle = {
  fontFamily: 'Lato',
};

export const bodyM11: TextStyle = {
  fontSize: 11,
  fontFamily: 'Lato',
};
export const bodyM12: TextStyle = {
  fontSize: 12,
  fontFamily: 'Lato',
};

export const bodyM13: TextStyle = {
  fontSize: 13,
  fontFamily: 'Lato',
};
export const bodyM14: TextStyle = {
  fontSize: 14,
  fontFamily: 'Lato',
};

export const bodyM16: TextStyle = {
  fontSize: 16,
  fontFamily: 'Lato',
};

export const bodyM18: TextStyle = {
  fontSize: 18,
  fontFamily: 'Lato',
};

export const bodyM24: TextStyle = {
  fontSize: 24,
  fontFamily: 'Lato',
};

export const bodyM48: TextStyle = {
  fontSize: 48,
  fontFamily: 'Lato',
};

// Regular
export const bodyRegular: TextStyle = {
  fontFamily: 'Lato',
};

export const bodyR11: TextStyle = {
  fontSize: 11,
  fontFamily: 'Lato',
};
export const bodyR13: TextStyle = {
  fontSize: 13,
  fontFamily: 'Lato',
};

export const bodyR14: TextStyle = {
  fontSize: 14,
  fontFamily: 'Lato',
};

export const bodyR16: TextStyle = {
  fontSize: 16,
  fontFamily: 'Lato',
};

export const bodyR18: TextStyle = {
  fontSize: 18,
  fontFamily: 'Lato',
};

// SemiBold
export const bodySemiBold: TextStyle = {
  fontFamily: 'Lato',
};

export const bodySB16: TextStyle = {
  fontSize: 16,
  fontFamily: 'Lato',
};
export const bodySB20: TextStyle = {
  fontSize: 20,
  fontFamily: 'Lato',
};
export const bodySB26: TextStyle = {
  fontSize: 26,
  fontFamily: 'Lato',
};
export const bodySB48: TextStyle = {
  fontSize: 48,
  fontFamily: 'Lato',
};

export type BodyFontWeight = '400' | '500' | '600' | '700';

export const getBodyFontByFontWeight = (
  fontWeight: BodyFontWeight,
): TextStyle => {
  switch (fontWeight) {
    case '400':
      return bodyRegular;
    case '500':
      return bodyMedium;
    case '600':
      return bodySemiBold;
    case '700':
      return bodyBold;
    default:
      return bodyRegular;
  }
};
