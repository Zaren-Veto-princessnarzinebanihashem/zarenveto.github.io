<!DOCTYPE html>
<html lang="ar" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Zaren Veto - Princess Narzine Bani Hashem</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root { --fb-blue: #1877F2; --fb-bg: #f0f2f5; --fb-gray: #E4E6EB; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: var(--fb-bg); margin: 0; padding: 0; }

        /* 1. تصميم اللوجو: الدرع الملكي مع حرف Z */
        .royal-shield-logo {
            width: 38px; height: 42px;
            background-color: var(--fb-blue);
            clip-path: polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%);
            display: flex; align-items: center; justify-content: center;
            color: white; font-weight: 900; font-size: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* 2. الهيدر الثابت المتبث في أعلى اليسار */
        .app-header { 
            background: white; padding: 10px 15px; display: flex; align-items: center; 
            position: fixed; top: 0; width: 100%; z-index: 10000; 
            border-bottom: 1px solid #ddd; box-sizing: border-box; 
        }
        .app-title { color: var(--fb-blue); font-weight: bold; font-size: 22px; margin-left: 12px; flex: 1; letter-spacing: -0.5px; }

        /* 3. شارة توثيق ميتا المسننة الأصلية (SVG الرسمي) */
        .meta-verified { width: 22px; height: 22px; margin-left: 5px; vertical-align: middle; display: inline-block; }

        /* 4. واجهة البروفايل Professional Mode */
        .main-view { margin-top: 60px; background: white; padding-bottom: 20px; }
        .cover-photo-wrapper { width: 100%; height: 230px; background: linear-gradient(135deg, #1877F2 0%, #002d5c 100%); position: relative; }
        .camera-circle { position: absolute; background: var(--fb-gray); padding: 8px; border-radius: 50%; border: 1px solid #ccc; cursor: pointer; display: flex; box-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .cam-on-cover { bottom: 15px; right: 15px; }

        .profile-pic-container { position: relative; margin-top: -85px; padding-left: 15px; width: fit-content; }
        .profile-img { width: 155px; height: 155px; border-radius: 50%; border: 4px solid white; background: #ddd; object-fit: cover; }
        .cam-on-profile { bottom: 12px; right: 5px; background: var(--fb-gray); border: 3px solid white; border-radius: 50%; padding: 7px; }

        /* الاسم والتوثيق والمتابعين */
        .user-identity { padding: 15px; }
        .full-name-verified { font-size: 26px; font-weight: bold; color: #050505; display: flex; align-items: center; }
        .followers-line { color: #65676b; font-weight: 600; font-size: 17px; margin-top: 5px; }

        /* أزرار التفاعل المطلوبة */
        .action-row { display: flex; padding: 5px 15px; gap: 8px; }
        .fb-style-btn { flex: 1; padding: 10px; border-radius: 8px; border: none; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 14px; }
        .btn-primary { background: var(--fb-blue); color: white; }
        .btn-secondary { background: var(--fb-gray); color: black; }

        /* رابط الولوج الموثق */
        .verified-link { margin: 15px; display: block; color: var(--fb-blue); text-decoration: none; font-weight: bold; font-size: 15px; }

        /* الصفحة الرسمية للتطبيق */
        .official-page-shortcut { margin: 15px; background: var(--fb-bg); padding: 15px; border-radius: 12px; display: flex; align-items: center; text-decoration: none; color: black; border: 1px solid #ddd; }
        .shield-circle { width: 48px; height: 52px; background: var(--fb-blue); clip-path: polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px; border: 2px solid white; }
        .page-text-content { margin-left: 12px; flex: 1; }
        .page-name-verified { font-weight: bold; font-size: 16px; display: flex; align-items: center; }

        /* فورم التسجيل */
        .register-section { background: white; margin: 15px; padding: 20px; border-radius: 12px; border: 1px solid #ddd; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        input { width: 100%; padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; background: #f5f6f7; }
        .submit-sign { width: 100%; padding: 12px; background: #42b72a; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 18px; margin-top: 10px; }
    </style>
</head>
<body>

    <!-- الهيدر الثابت - Zaren Veto -->
    <header class="app-header">
        <div class="royal-shield-logo">Z</div>
        <div class="app-title">Zaren Veto</div>
        <i class="fa-solid fa-magnifying-glass" style="color: #65676b; font-size: 20px;"></i>
    </header>

    <main class="main-view">
        <!-- منطقة الغلاف -->
        <div class="cover-photo-wrapper">
            <div class="camera-circle cam-on-cover"><i class="fas fa-camera"></i></div>
        </div>

        <!-- صورة الحساب الشخصي -->
        <div class="profile-pic-container">
            <img src="https://via.placeholder.com/150" class="profile-img" alt="Princess Narzine Bani Hashem">
            <div class="camera-circle cam-on-profile"><i class="fas fa-camera"></i></div>
        </div>

        <!-- بيانات نرزين كاملة والتوثيق المسنن -->
        <div class="user-identity">
            <div class="full-name-verified">
