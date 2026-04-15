// مثال بسيط لهيكل الهيدر الثابت
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
        {/* اللوجو: الدرع مع حرف Z */}
        <Image source={require('./assets/z_shield_logo.png')} style={styles.logo} />
        <Text style={styles.appName}>Zaren Veto</Text>
      </View>
      {/* أيقونات البحث والرسائل هنا */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1000,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1877F2', // لون يشبه فيسبوك أو حسب اختيارك
    marginLeft: 8,
  },
});
