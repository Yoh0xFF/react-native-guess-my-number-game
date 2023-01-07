import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../constants/colors';

interface Props {
  children: ReactNode;
}

export default function HintText({ children }: Props) {
  return <Text style={styles.hintText}>{children}</Text>;
}

const styles = StyleSheet.create({
  hintText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
