import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

const BaseStyles = {
  mainContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.transparent,
    paddingTop: Metrics.navBarHeight,
	},
  authButton: {
    marginVertical: 20,
    padding: 10,
    borderWidth: 1,
  },
}

export default BaseStyles
