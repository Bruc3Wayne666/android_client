import * as React from "react"
import Svg, { Circle } from "react-native-svg"
import {FC} from "react";
/* SVGR has dropped some elements not supported by react-native-svg: animate */

const Spinner: FC<any> = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            margin: "auto",
            background: "0 0",
            display: "block",
            shapeRendering: "auto",
        }}
        width={200}
        height={200}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        {...props}
    >
        <Circle cx={50} cy={30} r={20} fill="#1d0e0b"/>
    </Svg>
)

export default Spinner
