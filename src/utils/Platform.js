import { Dimensions, Platform } from 'react-native'

export const getDimensions = () => Dimensions.get('window')

export const isIOS = () => Platform.OS === 'ios'
