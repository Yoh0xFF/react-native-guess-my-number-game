import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function Title({ children, style }: Props) {
  return <Text style={[styles.title, style ?? {}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
