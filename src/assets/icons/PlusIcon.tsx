import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16 29.333c7.333 0 13.333-6 13.333-13.333S23.333 2.667 16 2.667 2.667 8.667 2.667 16s6 13.333 13.333 13.333ZM10.667 16h10.666M16 21.333V10.667"
      stroke="#8A8C90"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
