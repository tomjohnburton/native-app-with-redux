import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }
  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries} //* data source
        renderItem={this.renderItem} //* component for each library
        keyExtractor={library => library.id} //* key assign
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
