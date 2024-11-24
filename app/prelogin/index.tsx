// app/index.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import Config from 'react-native-config';
import { SafeAreaView } from 'react-native-safe-area-context';
import z from 'zod';
import Button from '../components/molecule/Button';
import Header from '../components/molecule/Header';
import RhfInput from '../components/molecule/RHFInput';

const HomePage = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { isValid, isDirty, errors },
    watch
  } = useForm({
    resolver: zodResolver(z.object({})),
    defaultValues: {
      search: '',
    },
    mode: 'onChange',
  });

  const ss = watch('search')

  console.log('ss', ss)


  const { apiUrl, appEnv } = Config;
  console.log('apiUrl', apiUrl, Config)

  console.log('API URL:', apiUrl);
  console.log('App Environment:', appEnv);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar backgroundColor='red' translucent />
      <Header title="Welcome to App" subtitle="This is a dynamic header!" variant="bold" />
      <View style={{ gap: 20, alignItems: 'center' }}>
        {/* Header with dynamic variant */}

        <RhfInput name='search' control={control} label='Search products' />
        {/* Button with dynamic variant */}
        <Button label="Click Me" onPress={handlePress} variant="primary" />
        <Button label="Secondary Button" onPress={handlePress} variant="secondary" />
        <Button label="Outline Button" onPress={handlePress} variant="outline" color="#28a745" />

        {/* Navigation Link */}
        <Link style={{ flex: 1 }} href="/home">
          <Button label="Go to About Page" onPress={() => { }} variant="outline" color="#007bff" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomePage;
