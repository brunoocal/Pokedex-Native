import Svg, { Path } from 'react-native-svg';

export const Arrow = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        {...props}
    >
        <Path strokeLinecap="round" strokeLinejoin="round" d="m7 16-4-4m0 0 4-4m-4 4h18" />
    </Svg>
);
