import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function SvgContainer({ height, width, size, svg,
  left,
  right,
  paddingHorizontal,
  _style
}) {
  const SvgImage = () => <SvgXml xml={svg} width={width} height={height}
    style={{
      paddingHorizontal: paddingHorizontal ?? 0,
      marginLeft: left ?? 0,
      marginRight: right ?? 0,
      ..._style
    }}
  />;
  return <SvgImage />;
};
