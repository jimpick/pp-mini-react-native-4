import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import PixelDoc from '../store/pixelDoc';
import MainView from './MainView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.pixelDoc = new PixelDoc()
    // this.pixelDoc.on('update', ({info, doc}) => this.setState({info, doc}));
    this.setState({
      "info": {
        "sourceKey": "45e4235c3f6efcda00ec43a2e67f8e44d3264f3d8d979acd9d625146c10a536b",
        "archiverKey": "7380a59e764b2ea0a903aee5d74a44f9bcc5f43528679c897dd6940e64f16dad",
        "archiverChangesLength": 2,
        "peers": [
          {
            "key": "45e4235c3f6efcda00ec43a2e67f8e44d3264f3d8d979acd9d625146c10a536b",
            "length": 62
          },
          {
            "key": "7ac83a0b73ec7339f09186470ab08e14c49187172cca109a8f97e13a6c0cda8a",
            "length": 53
          }
        ]
      },
      "doc": {
        "x0y0": "g",
        "x0y1": "r",
        "x1y0": "r",
        "x1y1": "b"
      }
    });
  }

  setPixelColor(x, y, color) {
    // this.pixelDoc.setPixelColor(x, y, color)
    const doc = Object.assign({}, this.state.doc, {[`x${x}y${y}`]: color})
    this.setState({doc})
  }

  render() {
    if (!this.state.doc) {
      return <Text>Loading...</Text>;
    }
    return (
      <MainView
        info={this.state.info}
        doc={this.state.doc}
        setPixelColor={this.setPixelColor.bind(this)} />
    )
  }
}

