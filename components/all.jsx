import { Text } from "react-native"

export const Component01 = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate('Component02')}>Component 01</Text>
  )
}

export const Component02 = ({ navigation }) => {
  return (
    <Text >Component 02</Text>
  )
}

export const Component03 = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate('Component02')}>Component 03</Text>
  )
}

export const Component04 = ({ navigation }) => {
  return (
    <Text>Component 04</Text>
  )
}
