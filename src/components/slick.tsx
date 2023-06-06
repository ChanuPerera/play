import React from 'react';
import { View, StyleSheet } from 'react-native';

const SlickDots = ({ activeIndex, count, activeColor, inactiveColor }) => {
  const dots = Array.from({ length: count }, (_, index) => (
    <View
      key={index}
      style={[
        styles.dot,
        index === activeIndex ? { backgroundColor: activeColor } : { backgroundColor: inactiveColor },
      ]}
    />
  ));

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default SlickDots;
