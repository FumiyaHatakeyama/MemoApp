import React from 'react';
import { StyleSheet, View, Text} from 'react-native';



const styles = StyleSheet.create({
  circleAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  circleAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
});

class CircleButton extends React.Component {
  render() {
    const {style, color} = this.props;

    let bgColor = '#E31676';
    let textColor = '#FFF';

    if (color === 'white') {
        bgColor = '#FFF';
        textColor = '#E31676';
    }

    return(
      <View style={[styles.circleAddButton, style, { backgroundColor: bgColor}]}>
        <Text style={[styles.circleAddButtonTitle, {color:textColor}]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default CircleButton;
