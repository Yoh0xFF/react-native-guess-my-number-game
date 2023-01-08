import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

import GuessLogItem from '../components/game/GuessLogItem';
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
  onGameOver: (guessRounds: number) => void;
}

export default function GameScreen({ userNumber, onGameOver }: Props) {
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    setCurrentGuess(initialGuess);
    setGuessRounds([initialGuess]);
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
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
    setGuessRounds((prevState) => [newRandomNumber, ...prevState]);
  };

  return (
    <View style={styles.screen}>
      <Title style={styles.titleText}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <HintText style={styles.hintText}>Higher or lower?</HintText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          //alwaysBounceVertical={false}
          // scrollEnabled={true}
          data={guessRounds}
          keyExtractor={(_, i) => `${i}`}
          renderItem={(x) => (
            <GuessLogItem
              roundNumber={guessRounds.length - x.index}
              guess={x.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  titleText: {
    marginTop: 24,
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

  listContainer: {
    flex: 1,
    padding: 16,
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
