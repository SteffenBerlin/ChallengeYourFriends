var React = require('react-native');
var {
  AppRegistry,
  View,
  StyleSheet,
  Text
} = React;

var CreateChallenge = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <Text>
          Create Challenge
        </Text>
      </View>
      <View style={[styles.description, this.border('red')]}>
        <Text>
          Description
        </Text>
      </View>
      <View style={[styles.choosePerson, this.border('blue')]}>
        <Text>
          Choose Person
        </Text>
      </View>
      <View style={[styles.send, this.border('green')]}>
        <Text>
          Send
        </Text>
      </View>
    </View>
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    //font-size: 20pt
  },
  description: {
    flex: 0.5
  },
  choosePerson: {
    flex: 0.2
  },
  send: {
    flex: 0.1
  }
});

AppRegistry.registerComponent('createChallenge', function() {
  return CreateChallenge;
});