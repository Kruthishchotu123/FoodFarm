// components/RhfInput.tsx
import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { useController, Control } from 'react-hook-form';

interface RhfInputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  rules?: object; // Validation rules
}

const RhfInput: React.FC<RhfInputProps> = ({
  name,
  control,
  placeholder,
  label,
  secureTextEntry = false,
  rules = {},
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.errorBorder]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  errorBorder: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
  },
});

export default RhfInput;
