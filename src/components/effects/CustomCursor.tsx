import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
    return (
        <AnimatedCursor
        innerSize={8}
        color="255, 255, 255"
        innerScale={0.7}
        trailingSpeed={1}
        />
    );
}