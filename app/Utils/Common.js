import * as SecureStore from 'expo-secure-store'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'
import {
  errorColor,
  errorVisibilityTime,
  infoVisibilityTime,
  successColor,
  successVisibilityTime,
  warnColor,
  warnVisibilityTime
} from './Config'

export const setSecureToken = async token => {
  return SecureStore.setItemAsync('userToken', token)
    .then(data => {
      return true
    })
    .catch(err => {
      console.log('SET SECURE TOKEN ERR == ', err)
      return false
    })
}

export const getSecureToken = async () => {
  return await SecureStore.getItemAsync('userToken')
}

export const deleteSecureToken = keyName => {
  return SecureStore.deleteItemAsync(keyName)
    .then(() => {
      return true
    })
    .catch(err => {
      return false
    })
}

export const setSecureTasks = async tasks => {
  return SecureStore.setItemAsync('tasks', tasks)
    .then(data => {
      return true
    })
    .catch(err => {
      console.log('SET Tasks ERR == ', err.message)
      return false
    })
}

export const getSecureTasks = async () => {
  return await SecureStore.getItemAsync('tasks')
}

export const SuccessToastAlert = (text1 = 'Success', text2) => {
  Toast.show({
    type: 'successToast',
    text1,
    text2,
    topOffset: 60,
    visibilityTime: successVisibilityTime
  })
}

export const ErrorToastAlert = (text1 = 'Error', text2) => {
  Toast.show({
    type: 'errorToast',
    text1,
    text2,
    topOffset: 60,
    visibilityTime: errorVisibilityTime
  })
}

export const InfoToastAlert = (text1 = 'Info', text2) => {
  Toast.show({
    type: 'info',
    text1,
    text2,
    topOffset: 60,
    visibilityTime: infoVisibilityTime
  })
}

export const WarnToastAlert = (text1 = 'Warn', text2) => {
  Toast.show({
    type: 'warnToast',
    text1,
    text2,
    topOffset: 60,
    visibilityTime: warnVisibilityTime
  })
}

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
  successToast: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: successColor }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
      text2NumberOfLines={5}
    />
  ),
  errorToast: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: errorColor }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '200'
      }}
      text2NumberOfLines={5}
    />
  ),
  warnToast: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: warnColor }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
      text2NumberOfLines={5}
    />
  )
}
