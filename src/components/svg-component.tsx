import React from "react";
import { SvgXml } from "react-native-svg";

interface Props {
    svgMarkup: string;
    width: string;
    height: string;
}

export default function SvgComponent({ svgMarkup, width, height }: Props) {
    const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;

    return <SvgImage />;
}