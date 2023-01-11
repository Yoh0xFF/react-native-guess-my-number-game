import { ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return <View style={styles.card}>{children}</View>;
}

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primart800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
});
