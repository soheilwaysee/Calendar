import React, { PureComponent } from 'react';
import { Image as ImageNative } from 'react-native';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  state = {
    error: false
  };

  errorHandler = () => this.setState({ error: true });

  render() {
    const { source, style, ...rest } = this.props;
    const { error } = this.state;
    return (
      <ImageNative
        onError={this.errorHandler}
        source={!error ? source : require('assets/images/error.png')}
        style={style}
        defaultSource={require('assets/images/placeholder.png')}
        {...rest}
      />
    );
  }
}

Image.defaultProps = {
  style: undefined
};

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  source: ImageNative.propTypes.source.isRequired
};

export default Image;
