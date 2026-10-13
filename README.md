# Bitpin USDT Chart Userscript

A lightweight Tampermonkey userscript that removes a specific login/register overlay from the Bitpin USDT chart page.

**Version:** `1.0.2`

## Features

- Removes the targeted overlay `<div>` and all of its child elements.
- Matches the target using seven CSS classes, regardless of their order or any additional classes.
- Does not depend on the `aria-hidden` attribute or an exact class count.
- Detects overlays dynamically added to the page using `MutationObserver`.
- Runs only on the Bitpin USDT page.
- Requires no external APIs or dependencies.
- Supports update checks and downloads through GitHub when enabled in Tampermonkey.

## Supported Page

https://bitpin.org/coin/USDT/
https://bitpin.ir/coin/USDT/

## Easy Installation (Recommended)

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension and enable it.
2. Open the direct installation URL below in your browser.
3. Confirm the installation in Tampermonkey if prompted.
4. Open or refresh the Bitpin USDT page.

**Direct installation URL:**

https://raw.githubusercontent.com/shinraad/Bitpin-USDTChart-Userscript/main/bitpin-usdt.user.js

If the browser displays plain JavaScript instead of opening Tampermonkey, copy the script into a new Tampermonkey userscript and save it, or use the manual method below.

## Manual Installation

1. Open [`bitpin-usdt.user.js`](./bitpin-usdt.user.js) in this repository.
2. Click **Raw** and copy the complete code.
3. In Tampermonkey, select **Create a new script**.
4. Replace the editor content with the copied code; save and enable the script.
5. Refresh the Bitpin USDT page.

## Automatic Updates

The script declares `@version`, `@updateURL`, and `@downloadURL`. To receive future releases, keep update checks enabled in Tampermonkey. New releases must increment `@version` and publish the updated `.user.js` file to the `main` branch. GitHub Releases alone do not update the installed script. Update checks are periodic, not immediate.

## How It Works

The script targets a `div` containing all seven CSS classes below, regardless of their order or additional classes:

```css
div.absolute.inset-0.z-20.flex.items-center.justify-center.backdrop-blur-md
```

It removes the matching `div` and all of its descendants from the browser DOM using `Element.remove()`. A `MutationObserver` checks for overlays that are added later or whose class attributes change.

## Changes in v1.0.2

- extends the userscript to support both Bitpin domains:
    - bitpin.org
    - bitpin.ir


## Limitations

- Changes browser-side presentation only.
- Does not bypass server-side authentication or authorization.
- Does not retrieve restricted chart data.
- May require updates if the website's HTML or classes change.

## Disclaimer

This is an independent, unofficial project and is not affiliated with, endorsed by, or maintained by Bitpin. The script is provided as-is, without warranty.

---

<div dir="rtl" align="right">

# اسکریپت نمودار تتر بیت‌پین

اسکریپت سبک Tampermonkey برای حذف لایه مشخص ورود و ثبت‌نام از صفحه نمودار تتر در وب‌سایت بیت‌پین.

**نسخه: `1.0.2`**

## قابلیت‌ها

- حذف کامل `div` هدف به همراه تمام عناصر داخلی آن
- شناسایی عنصر بر اساس وجود هفت کلاس CSS، مستقل از ترتیب کلاس‌ها یا وجود کلاس‌های اضافی
- بدون وابستگی به ویژگی `aria-hidden` یا تعداد دقیق کلاس‌ها
- شناسایی لایه‌هایی که بعداً به‌صورت پویا ایجاد می‌شوند، با استفاده از `MutationObserver`
- اجرا فقط در صفحه تتر بیت‌پین
- بدون نیاز به API یا کتابخانه خارجی
- پشتیبانی از بررسی و دریافت به‌روزرسانی از GitHub در صورت فعال بودن تنظیمات Tampermonkey

## صفحه پشتیبانی‌شده

</div>

https://bitpin.org/coin/USDT/

<div dir="rtl" align="right">

## نصب آسان (پیشنهادی)

۱. افزونه [Tampermonkey](https://www.tampermonkey.net/) را روی مرورگر نصب و فعال کنید.

۲. لینک نصب مستقیم زیر را در مرورگر باز کنید.

۳. در صورت نمایش پنجره نصب Tampermonkey، نصب اسکریپت را تأیید کنید.

۴. صفحه تتر بیت‌پین را باز کنید یا آن را بازآوری کنید.

**لینک نصب مستقیم:**

</div>

https://raw.githubusercontent.com/shinraad/Bitpin-USDTChart-Userscript/main/bitpin-usdt.user.js

<div dir="rtl" align="right">

اگر به‌جای پنجره نصب، متن کد JavaScript نمایش داده شد، می‌توانید آن را در یک اسکریپت جدید Tampermonkey کپی و ذخیره کنید یا از روش نصب دستی زیر استفاده کنید.

## نصب دستی

۱. فایل [`bitpin-usdt.user.js`](./bitpin-usdt.user.js) را در همین مخزن باز کنید.

۲. گزینه **Raw** را انتخاب و کل کد را کپی کنید.

۳. در Tampermonkey گزینه **Create a new script** را انتخاب کنید.

۴. کد قبلی ویرایشگر را با کد کپی‌شده جایگزین کنید؛ سپس آن را ذخیره و فعال کنید.

۵. صفحه نمودار تتر بیت‌پین را بازآوری کنید.

## به‌روزرسانی خودکار

اسکریپت دارای مشخصه‌های `@version`، `@updateURL` و `@downloadURL` است. برای دریافت نسخه‌های بعدی، بررسی به‌روزرسانی را در Tampermonkey فعال نگه دارید. هنگام انتشار نسخه جدید، باید مقدار `@version` افزایش یابد و فایل `.user.js` جدید در شاخه `main` قرار بگیرد. ایجاد Release در GitHub به‌تنهایی باعث به‌روزرسانی اسکریپت نصب‌شده نمی‌شود. بررسی به‌روزرسانی دوره‌ای است و لزوماً بلافاصله انجام نمی‌شود.

## نحوه عملکرد

اسکریپت، `div` دارای تمام هفت کلاس CSS زیر را، بدون توجه به ترتیب کلاس‌ها یا وجود کلاس‌های اضافی، شناسایی می‌کند:

</div>

```css
div.absolute.inset-0.z-20.flex.items-center.justify-center.backdrop-blur-md
```

<div dir="rtl" align="right">

سپس با استفاده از `Element.remove()` آن عنصر را به همراه تمام فرزندانش از DOM مرورگر حذف می‌کند. `MutationObserver` نیز برای شناسایی لایه‌هایی استفاده می‌شود که بعداً ایجاد می‌شوند یا کلاس‌هایشان تغییر می‌کند.

## تغییرات نسخه ۱.۰.۲

- در این نسخه، پشتیبانی از دامنه bitpin.ir به اسکریپت اضافه شده است.

اکنون اسکریپت روی صفحات نمودار تتر در هر دو دامنه bitpin.org و bitpin.ir اجرا می‌شود.

## محدودیت‌ها

- تغییرات فقط در ظاهر صفحه داخل مرورگر اعمال می‌شوند.
- محدودیت‌های احراز هویت یا مجوز دسترسی سمت سرور دور زده نمی‌شوند.
- داده‌های محدودشده نمودار بازیابی نمی‌شوند.
- با تغییر ساختار HTML یا کلاس‌های سایت ممکن است اصلاح اسکریپت ضروری باشد.

## سلب مسئولیت

این پروژه مستقل و غیررسمی است و هیچ وابستگی یا تأییدی از طرف بیت‌پین ندارد. اسکریپت بدون هیچ‌گونه ضمانت ارائه می‌شود.

</div>
