// مكون حسابك الشخصي الموثق
const UserProfile = () => {
  return (
    <View style={styles.container}>
      {/* صورة الغلاف مع أيقونة الكاميرا */}
      <View style={styles.coverSection}>
        <Image source={require('./cover.jpg')} style={styles.coverPhoto} />
        <TouchableOpacity style={styles.cameraIconCover}><Icon name="camera" /></TouchableOpacity>
      </View>

      {/* صورة الحساب مع أيقونة الكاميرا */}
      <View style={styles.profileSection}>
        <Image source={require('./my_photo.jpg')} style={styles.profilePhoto} />
        <TouchableOpacity style={styles.cameraIconProfile}><Icon name="camera" /></TouchableOpacity>
      </View>

      {/* الاسم مع شارة التوثيق */}
      <View style={styles.nameRow}>
        <Text style={styles.userName}>اسمك هنا</Text>
        <Image source={require('./verified_badge.png')} style={styles.verifiedIcon} />
      </View>

      {/* عدد المتابعين */}
      <Text style={styles.followerCount}>19k followers • 250 following</Text>

      {/* أزرار التفاعل */}
      <View style={styles.buttonRow}>
        <Button title="Add Friend" color="#1877F2" />
        <Button title="Follow" variant="outline" />
        <Button title="Subscribe" variant="outline" />
      </View>
      
      {/* رابط الصفحة الرسمية */}
      <TouchableOpacity onPress={goToOfficialPage}>
         <Text style={styles.linkText}>Visit Zaren Veto Official Page</Text>
      </TouchableOpacity>
    </View>
  );
};
