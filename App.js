import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. الهيدر الثابت - شعار Zaren Veto */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.shieldLogo}>
             <Text style={styles.zLetter}>Z</Text>
          </View>
          <Text style={styles.headerTitle}>Zaren Veto</Text>
        </View>
        <Ionicons name="search" size={24} color="black" />
      </View>

      <ScrollView>
        {/* 2. منطقة الغلاف وصورة البروفايل */}
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/800x400' }} 
            style={styles.coverPhoto} 
          />
          <TouchableOpacity style={styles.cameraIconCover}>
            <Ionicons name="camera" size={20} color="black" />
          </TouchableOpacity>

          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }} 
              style={styles.profilePhoto} 
            />
            <TouchableOpacity style={styles.cameraIconProfile}>
              <Ionicons name="camera" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 3. الاسم والتوثيق والمتابعين */}
        <View style={styles.infoSection}>
          <View style={styles.nameRow}>
<Text style={styles.userName}>Princess Narzine Bani Hashem</Text>
            {/* أيقونة التوثيق المسننة الزرقاء */}
            <MaterialCommunityIcons name="check-decagram" size={22} color="#1877F2" style={{marginLeft: 5}} />
          </View>
          
          <Text style={styles.followerText}>19k followers • 250 following</Text>
          <Text style={styles.bio}>Digital Creator | Owner of Zaren Veto</Text>
        </View>

        {/* 4. أزرار التفاعل (Facebook Style) */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.actionButton, {backgroundColor: '#1877F2'}]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Add Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={{fontWeight: 'bold'}}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={{fontWeight: 'bold'}}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        {/* رابط الصفحة الرسمية */}
        <TouchableOpacity style={styles.officialLink}>
          <MaterialCommunityIcons name="shield-check" size={24} color="#1877F2" />
          <Text style={styles.linkText}>Zaren Veto Official Page</Text>
          <MaterialCommunityIcons name="check-decagram" size={16} color="#1877F2" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 60, flexDirection: 'row', alignItems: 'center', 
    justifyContent: 'space-between', paddingHorizontal: 15,
    borderBottomWidth: 0.5, borderBottomColor: '#ccc', backgroundColor: 'white'
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  shieldLogo: {
    width: 35, height: 35, backgroundColor: '#1877F2', 
    borderRadius: 8, justifyContent: 'center', alignItems: 'center'
  },
  zLetter: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: '#1877F2' },
  profileSection: { height: 250 },
  coverPhoto: { width: '100%', height: 200 },
  profileImageContainer: { position: 'absolute', bottom: 0, left: 20 },
  profilePhoto: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: 'white' },
  cameraIconCover: { position: 'absolute', top: 160, right: 15, backgroundColor: '#e4e6eb', padding: 8, borderRadius: 20 },
  cameraIconProfile: { position: 'absolute', bottom: 5, right: 5, backgroundColor: '#e4e6eb', padding: 5, borderRadius: 15 },
  infoSection: { paddingHorizontal: 20, marginTop: 10 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 24, fontWeight: 'bold' },
  followerText: { color: '#65676b', marginTop: 5, fontWeight: '500' },
  bio: { marginTop: 10, fontSize: 16 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 15 },
  actionButton: { 
    backgroundColor: '#e4e6eb', paddingVertical: 10, paddingHorizontal: 20, 
    borderRadius: 8, width: '30%', alignItems: 'center' 
  },
  officialLink: { 
    flexDirection: 'row', alignItems: 'center', margin: 20, 
    padding: 15, backgroundColor: '#f0f2f5', borderRadius: 10 
  },
  linkText: { marginHorizontal: 10, fontWeight: 'bold', fontSize: 16 }
});
