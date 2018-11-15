import React, { PureComponent } from 'react';
import {
  Modal as ModalComponent,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { styleJoiner } from 'utils/helpers';
import { colors } from 'utils/theme';
import PropTypes from 'prop-types';
import { Icon, Button } from 'native-base';

class Modal extends PureComponent {
  state = {
    showModal: true
  };

  toggleModal = () => this.setState(state => ({ showModal: !state.showModal }));

  render() {
    const { showModal } = this.state;
    const {
      children,
      style: overwriteStyle,
      transparent,
      onRequestClose
    } = this.props;
    return (
      <ModalComponent transparent={transparent} visible={showModal}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={styleJoiner(styles.container, overwriteStyle)}>
            <Button transparent style={styles.close} onPress={this.toggleModal}>
              <Icon.Ionicons style={styles.closeIcon} name="ios-close" />
            </Button>

            {children}
          </View>
        </TouchableWithoutFeedback>
      </ModalComponent>
    );
  }
}

Modal.propTypes = {
  onRequestClose: PropTypes.func,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired,
  transparent: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center'
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  closeIcon: { color: colors.white }
});

Modal.defaultProps = {
  transparent: true,
  style: undefined,
  onRequestClose: () => undefined
};

export default withNavigation(Modal);
