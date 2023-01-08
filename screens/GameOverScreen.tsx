import { Image, StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

interface Props {
  rounds: number;
  userNumber: number;
  onStartNewGame: () => void;
}

export default function GameOverScreen({
  rounds,
  userNumber,
  onStartNewGame,
}: Props) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{rounds}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primart800,
    overflow: 'hidden',
    margin: 36,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },

  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
