import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ title, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props}
        style={styles.input}
        // placeholder는 ?? (nullish 병합 연산자) 를 사용해서 전달되지 않았을 때 title이 나타나도록 했음
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize="none"
        autoCorrect={false}
        // keyboardType={keyboardType}
        // returnKeyType={returnKeyType}
        textContentType="none"
        // secureTextEntry={secureTextEntry}
        keyboardAppearance="light"
      />
    </View>
  );
};

Input.defaultProps = {
  keyboardType: KeyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  //   keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
  //   returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  //   secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
  },
});

export default Input;
