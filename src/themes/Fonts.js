const type = {
  base: 'Helvetica',
  bold: 'Helvetica-Bold',
  emphasis: 'Helvetica-Italic',
}

const size = {
  large: 24,
  medium: 20,
  small: 16,
  tiny: 12,
}

const style = {
  baseLarge: {
    fontFamily: type.base,
    fontSize: size.large,
  },
  baseMedium: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  baseSmall: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  baseTiny: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
  boldLarge: {
    fontFamily: type.bold,
    fontSize: size.large,
  },
  boldMedium: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  boldSmall: {
    fontFamily: type.bold,
    fontSize: size.small,
  },
  boldTiny: {
    fontFamily: type.bold,
    fontSize: size.tiny,
  },
  emphasisLarge: {
    fontFamily: type.italic,
    fontSize: size.large,
  },
  emphasisMedium: {
    fontFamily: type.italic,
    fontSize: size.medium,
  },
  emphasisSmall: {
    fontFamily: type.italic,
    fontSize: size.small,
  },
  emphasisTiny: {
    fontFamily: type.italic,
    fontSize: size.tiny,
  },
}

export default {
  type,
  size,
  style
}
