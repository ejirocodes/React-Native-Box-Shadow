import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, Platform, Pressable} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Shadow} from 'react-native-shadow-2';

const App: () => Node = () => {
  console.log(Platform.OS === 'ios');
  return (
    <View style={styles.container}>
      {/* <View style={[styles.card, styles.elevation]}>
        <View>
          <Text style={styles.heading}>
            React Native Drop Shadow (Elevation)
          </Text>
        </View>
        <Text>
          Using the elevation style prop to apply box-shadow for Android devices
        </Text>
      </View>
      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>
            React Native Drop Shadow [Shadow Props]
          </Text>
        </View>
        <Text>Using Shadow Props to apply box-shadow for iOS devices</Text>
      </View> */}
      <View style={[styles.card, styles.boxShadow]}>
        <View>
          <Text style={styles.heading}>
            React Native cross-platform box shadow
          </Text>
        </View>
        <Text style={styles.boxShadow}>
          Using the Platform API to conditionally render box shadow
        </Text>
        <DropShadow style={styles.shadowProp}>
          <Pressable
            style={styles.button}
            onPress={() => console.log('pressed')}>
            <Text style={(styles.text, styles.buttonText)}>See more</Text>
          </Pressable>
        </DropShadow>
      </View>

      <Shadow
        distance={5}
        startColor={'#00000010'}
        containerViewStyle={{marginVertical: 20}}
        radius={8}>
        <View style={[styles.card, {marginVertical: 0}]}>
          <View>
            <Text style={styles.heading}>
              React Native cross-platform box shadow
            </Text>
          </View>
          <Text style={styles.boxShadow}>
            Using the Platform API to conditionally render box shadow
          </Text>
          <DropShadow style={styles.shadowProp}>
            <Pressable
              style={styles.button}
              onPress={() => console.log('pressed')}>
              <Text style={(styles.text, styles.buttonText)}>See more</Text>
            </Pressable>
          </DropShadow>
        </View>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF1E6',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    lineHeight: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  // elevation: {
  //   elevation: 8,
  //   shadowColor: '#171717',
  // },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#4830D3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

// React Native cross-platform box shadow
const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717');

export default App;
