import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import R from '@components/utils/R';
import AuthBoiler from '@components/layout/AuthBoiler/index.';
import AuthFormScrollContainer from '@components/layout/AuthFormScrollContainer';
import Text from '@components/common/Text';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';

function LoginScreen({navigation, ...props}) {
  return (
    <AuthBoiler>
      <AuthFormScrollContainer showAuthHeader={true}>
        <ImageBackground
          source={R.image.AuthBackground()}
          style={styles.ImageBackgroundStyle}>
          <View style={styles.appImageContainer}>
            <Image
              source={R.image.AppName()}
              style={R.styles.img}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.mainContainer}>
            <Text
              color={'black'}
              fontSize={R.unit.width(0.09)}
              font={'RajdhaniBold'}>
              Login
            </Text>
            <Text
              color={'black'}
              fontSize={R.unit.width(0.047)}
              font={'RajdhaniSemiBold'}
              gutterTop={8}>
              Enter your detail below here
            </Text>

            <TextInput placeholderText={'Username'} Icon={R.image.Name()} />
            <TextInput
              placeholderText={'Password'}
              isPasswordInput={true}
              Icon={R.image.Password()}
            />
            <ActionButton
              title={'Login'}
              bgColor={'#262626'}
              marginTop={0.04}
              onPress={() => {
                navigation.navigate('BottomNavigator');
              }}
            />
            <View style={styles.contLine} />
            <ActionButton
              onPress={() => {
                navigation.navigate('SignUpScreen');
                console.log('Hello');
              }}
              title={'Sign Up'}
              bgColor={'#7E7E7E'}
              // marginTop={0.04}
            />
            <View style={styles.flexCont}>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.065)}
                font={'RajdhaniBold'}>
                Sign Up With
              </Text>
              <TouchableOpacity activeOpacity={0.8} style={styles.socialCont}>
                <Image
                  source={R.image.Facebook()}
                  style={R.styles.img}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.socialCont}>
                <Image
                  source={R.image.Gmail()}
                  style={R.styles.img}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </AuthFormScrollContainer>
    </AuthBoiler>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.color.primaryColor2,
    paddingHorizontal: R.unit.scale(10),
  },
  buttonView: {
    width: '100%',
    alignSelf: 'flex-end',
    marginBottom: R.unit.scale(48),
  },

  ImageBackgroundStyle: {width: '100%', height: '100%'},

  appImageContainer: {
    width: R.unit.width(0.8),
    height: R.unit.height(0.09),
    alignSelf: 'center',
    marginTop: R.unit.height(0.06),
  },

  mainContainer: {
    width: R.unit.width(0.9),
    paddingVertical: R.unit.height(0.02),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: R.unit.height(0.04),
    borderRadius: R.unit.width(0.04),
    alignItems: 'center',
  },
  contLine: {
    width: R.unit.width(0.84),
    height: R.unit.height(0.001),
    backgroundColor: 'black',
    marginVertical: R.unit.height(0.02),
  },
  socialCont: {
    width: R.unit.width(0.08),
    height: R.unit.width(0.08),
    marginLeft: R.unit.width(0.02),
  },
  flexCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.height(0.025),
  },
});
