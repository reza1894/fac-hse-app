# بهداری FAC – اپ اندروید ثبت مراجعات (HSE)

اپ با Capacitor ساخته می‌شود؛ همه کتابخانه‌ها داخل APK قرار می‌گیرند و برنامه بدون اینترنت کار می‌کند.
داده‌ها روی حافظه خود برنامه ذخیره می‌شوند. خروجی Excel و PDF از طریق منوی اشتراک‌گذاری اندروید ذخیره یا ارسال می‌شود.

## پیش‌نیازها
- Node.js 18 یا بالاتر
- Android Studio (همراه با Android SDK و JDK 17)

## ساخت APK
```bash
npm install
npm run prep
npx cap add android      # فقط بار اول
npx cap sync android
```
سپس یکی از دو راه:
- **Android Studio:** `npx cap open android` ← منوی Build ← Build Bundle(s) / APK(s) ← Build APK(s)
- **خط فرمان:** `cd android && ./gradlew assembleDebug`

فایل خروجی: `android/app/build/outputs/apk/debug/app-debug.apk`

برای انتشار نهایی (امضاشده): Build ← Generate Signed Bundle / APK ← APK.

## ویرایش برنامه
تمام رابط و منطق برنامه در `www/index.html` است. پس از هر تغییر `npx cap sync android` را اجرا کنید.
نام ماده‌ها و لیست‌های پایه (نوع آسیب، علت، بلوک، خدمات) را می‌توان از داخل خود برنامه، بخش «مواد و لیست‌ها»، تغییر داد.

## آیکون و نام
- نام برنامه: `capacitor.config.json` ← `appName`
- شناسه بسته: `appId` (قبل از `npx cap add android` تغییر دهید)
- آیکون: در Android Studio، Image Asset (روی پوشه res کلیک راست ← New ← Image Asset)
