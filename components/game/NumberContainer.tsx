import { ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

interface Props {
  children: ReactNode;
}

export default function NumberContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
