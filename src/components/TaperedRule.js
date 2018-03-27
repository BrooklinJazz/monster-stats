import React from 'react';
import Svg, {Polygon} from 'react-native-svg';

const TaperedRule = () => {
    return (
        <Svg
        height="5"
        width="100%"
    >
        <Polygon
            points="0,0 400,2.5 0,5"
            fill="red"
            stroke="black"
            strokeWidth="1"
        />
    </Svg>
    )
}
 
export default TaperedRule;