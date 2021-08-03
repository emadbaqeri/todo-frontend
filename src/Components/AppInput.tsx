import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface AppInputProps {
  onChange: (event: string) => void;
  value: string;
  multiline: boolean;
  placeholder: string;
}

const AppInput: React.FC<AppInputProps> = ({
  onChange,
  value,
  multiline = false,
  placeholder,
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#d4f4f4',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 10,
  },
});

export default AppInput;
