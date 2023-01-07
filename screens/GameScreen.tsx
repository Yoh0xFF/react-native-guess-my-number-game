import { StyleSheet, Text, View } from 'react-native';

interface Props {}

export default function GameScreen({}: Props) {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* GUESS  */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - buttons */}
      </View>

      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
