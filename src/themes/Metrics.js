import { Platform } from '../utils'

const { width, height } = Platform.getDimensions()

const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  baseMargin: 10,
  smallMargin: 5,
  contentPadding: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.isIOS() ? 64 : 54,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
  }
}

export default metrics
