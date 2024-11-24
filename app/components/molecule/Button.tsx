// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ label, onPress, color = '#007bff', variant = 'primary' }) => {
  const variantStyles = getButtonVariantStyles(variant, color);

  return (
    <TouchableOpacity style={[styles.button, variantStyles.button]} onPress={onPress}>
      <Text style={[styles.text, variantStyles.text]}>{label}</Text>
    </TouchableOpacity>
  );
};

const getButtonVariantStyles = (variant: string, color: string) => {
  switch (variant) {
    case 'secondary':
      return {
        button: { backgroundColor: '#6c757d' },
        text: { color: '#fff' },
      };
    case 'outline':
      return {
        button: { borderWidth: 1, borderColor: color, backgroundColor: 'transparent' },
        text: { color: color },
      };
    case 'primary':
      return {
        button: { backgroundColor: 'green' },
        text: { color: '#fff' },
      };
    default:
      return {
        button: { backgroundColor: color },
        text: { color: '#fff' },
      };
  }
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
