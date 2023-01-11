import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

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
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();

  let imageSize = 300;
  if (deviceWidth < 380) {
    imageSize = 150;
  }
  if (deviceHeight < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>

        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
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
    fontSize: deviceWidth < 380 ? 18 : 24,
    textAlign: 'center',
    marginBottom: 24,
  },

  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
