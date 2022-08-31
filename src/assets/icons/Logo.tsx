import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={24} height={24} rx={12} fill="#177EFF" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.646 9.227H19.4V7.549c0-1.11-.976-2.013-2.115-2.013H9.532v1.678c0 1.111.975 2.013 2.114 2.013Zm-4.934 9.237h7.753v-1.678c0-1.111-.975-2.013-2.114-2.013H4.598v1.678c0 1.11.976 2.013 2.114 2.013Zm5.22-4.62c-.036-.002-.066-.003-.11.001H4.598v-1.677c0-1.101.97-2.013 2.114-2.013H19.4v1.677c0 1.101-.97 2.013-2.114 2.013h-5.287l-.067-.001Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
