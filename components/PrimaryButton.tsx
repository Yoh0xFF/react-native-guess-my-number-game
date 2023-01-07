import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

export default function PrimaryButton({ children, onPress }: Props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: '#640233', borderless: true }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    elevation: 2,
  },

  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
});
