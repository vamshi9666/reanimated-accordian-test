import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  cond,
  eq,
  not,
  set,
  useCode,
  Value,
} from 'react-native-reanimated';
import {mix, onGestureEvent, withTransition} from 'react-native-redash';
import {useMemo} from 'react';
const LIST_ITEM_HEIGHT = 52;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: 'red',
    padding: 16,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
});

// export default () => <View />;

const MIN_HEIGHT = 100;
export default ({list}: {list: Array<any>}) => {
  //   const [open, setOpen] = useState(false);
  //   const MAX_HEIGHT = useMemo(() => list.le)
  const MAX_HEIGHT = useMemo(() => {
    return list.length * LIST_ITEM_HEIGHT;
  }, [list]);

  const open = new Value<0 | 1>(0);
  const transition = withTransition(open);

  const state = new Value(State.UNDETERMINED);
  //   const transition = useTransition(open);
  const height = mix(transition, 0, MAX_HEIGHT);
  const gestureHandler = onGestureEvent({state});
  useCode(() => cond(eq(state, State.END), set(open, not(open))), [
    open,
    state,
  ]);
  return (
    <>
      <Animated.View style={[{width, marginBottom: 'auto'}]}>
        <TapGestureHandler {...gestureHandler}>
          <Animated.View style={[styles.container]}>
            <Text style={styles.title}>Total Points</Text>
          </Animated.View>
        </TapGestureHandler>
        <Animated.View
          style={{
            height,
            backgroundColor: 'blue',
          }}>
          {list.map((item, key) => (
            <View {...{key}} style={{height: LIST_ITEM_HEIGHT, width: 200}} />
          ))}
        </Animated.View>
      </Animated.View>
    </>
  );
};
