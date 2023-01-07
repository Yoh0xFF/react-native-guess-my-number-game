import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import Colors from '../../constants/colors';

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function HintText({ children, style }: Props) {
  return <Text style={[styles.hintText, style ?? {}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  hintText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
