import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import { CardSection } from "./common";
import { selectLibrary } from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }
  renderDescription = () => {
    const { selectLibraryId, expanded } = this.props;
    const { id, description } = this.props.library.item;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, padding: 10 }}>{description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  { selectLibrary }
)(ListItem);
