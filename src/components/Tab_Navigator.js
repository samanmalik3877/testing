import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

const TabNavigator = ({navigate, name, isVisible, setModalVisible}) => {
  return (
    <View style={styles.tabWrapper}>
      <View style={styles.row}>
        <TouchableOpacity
          //onPress={() => navigate('Add Card')}
          style={styles.center}>
          <Icon
            name="creditcard"
            color={name === 'Add Card' ? '#232e4a' : 'grey'}
            size={24}
          />
          <Text>Add card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton}
          //onPress={() => navigate('QRCode')}
          >
          <Icon name="qrcode" color={'white'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity
        //  onPress={() => navigate('Transection History')}
          style={styles.center}>
          <Icon
            name="profile"
            color={name === 'Menu' ? '#232e4a' : 'grey'}
            size={24}
          />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backIcon: {
    marginTop: '8@s',
    marginLeft: '2%',
    height: '40@s',
  },
  tabWrapper: {
    backgroundColor: '#d7d8de',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: scale(45),
    zIndex: 99,
  },
  center: {
    alignItems: 'center',
  },
  middleButton: {
    backgroundColor: '#302e45',
    height: scale(80),
    width: scale(80),
    borderRadius: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontModal: {
    fontSize: '14@s',
    padding: scale(7),
  },
  headerText: {
    width: '100%',
    alignItems: 'center',
  },
  modalContainer: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    backgroundColor: '#FFFF',
  },
});

export default TabNavigator;
