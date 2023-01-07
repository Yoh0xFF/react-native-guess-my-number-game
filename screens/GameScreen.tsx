import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import HintText from '../components/ui/HintText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

type DirectionType = 'lower' | 'higher';

let minBoundary = 1;
let maxBoundary = 100;

interface Props {
  userNumber: number;
  onGameOver: () => void;
}

export default function GameScreen({ userNumber, onGameOver }: Props) {
  const [currentGuess, setCurrentGuess] = useState<number>(0);

  useEffect(() => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    setCurrentGuess(initialGuess);
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: DirectionType) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <HintText style={styles.hintText}>Higher or lower?</HintText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              -
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  hintText: {
    marginBottom: 12,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buttonContainer: {
    flex: 1,
  },
});

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}
