import Svg, {
  Path,
} from 'react-native-svg';

import {useState, useEffect} from 'react';

import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
  withRepeat
} from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface DesignProps {
  visible: boolean;
  firstPathAssist: boolean;
  secondPathAssist: boolean;
}
const Svg_ਕ : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

  // length of strokeDasharray
  const strokeDashoffset = useSharedValue(250);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: strokeDashoffset.value,
    };
  });

  useEffect(() => {
    strokeDashoffset.value = withRepeat(
      withTiming(0, {
        duration: 2500,
        easing: Easing.linear,
      }),
      -1,  // numberOfReps --> infinity
      false  // reverse --> false
    );
  }, []);

  const [strokeColor, setStrokeColor] = useState('#808080')
  if (!visible) {
    setStrokeColor('transparent')
  }
  return (
    <Svg
      width={100}
      height={100}
      fill="none"
    >
      <Path stroke="#808080" d="M9 20H91"/>
      <Path stroke="#808080" d="M76 20.5C76 28 74.6473 33.821 72 41.821C70.7826 45.5 66.4676 53.023 64.5 56.5M64.5 56.5C61 50.5 58.5 45 51.5 41.821C44.5 38.6421 38.5 38.821 30.5 41.821C22.5 44.821 20 50.8753 20 56.5C20 63.2292 24.1811 70.4858 30.5 73C34.5 74.5916 41.6613 77.9193 51.5 73C58.5 69.5 60.5387 63.5 64.5 56.5ZM64.5 56.5C67.0131 62.2861 69.7225 67.0656 72 73C73.5 76.9084 76 84.5 76 88.5"/>
    </Svg>

  )
}
export default Svg_ਕ
