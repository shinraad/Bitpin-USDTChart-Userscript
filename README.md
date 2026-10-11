
# Bitpin USDT Chart Userscript

A lightweight Tampermonkey userscript that removes a specific
login/register overlay from the Bitpin USDT chart page.

**Version:** `1.0.0`

## Features

- Removes the targeted login/register overlay.
- Uses exact HTML class matching.
- Supports dynamically rendered elements.
- Runs only on the Bitpin USDT page.
- Requires no external APIs or dependencies.
- Supports automatic updates through GitHub.

## Supported Page

- https://bitpin.org/coin/USDT/

## Installation

1. Install the Tampermonkey browser extension.
2. Open [bitpin-usdt.user.js](./bitpin-usdt.user.js).
3. Click **Raw** or copy the script into Tampermonkey.
4. Save and enable the script.
5. Refresh the Bitpin USDT page.

## How It Works

The script identifies the target overlay by checking its
HTML element, aria-hidden attribute, and exact CSS class list.

It removes the matching element from the DOM.

A MutationObserver detects dynamically inserted overlays.

## Limitations

- Changes browser-side presentation only.
- Does not bypass server-side authentication.
- Does not retrieve restricted chart data.
- May require updates if the website structure changes.

## Disclaimer

This is an independent, unofficial project and is not
affiliated with, endorsed by, or maintained by Bitpin.

---

<div dir="rtl" align="right">

# اسکریپت نمایش نمودار تتر بیت‌پین

اسکریپت سبک Tampermonkey برای حذف لایه مشخص ورود
و ثبت‌نام از صفحه نمودار تتر در وب‌سایت بیت‌پین.

**نسخه: `1.0.0`**

## قابلیت‌ها

- حذف لایه مشخص ورود و ثبت‌نام از صفحه تتر
- شناسایی دقیق عنصر با استفاده از کلاس‌های HTML
- پشتیبانی از تغییرات پویای صفحه
- اجرا فقط در صفحه تتر بیت‌پین
- بدون نیاز به API یا وابستگی خارجی
- پشتیبانی از به‌روزرسانی خودکار از طریق GitHub

## صفحه پشتیبانی‌شده

https://bitpin.org/coin/USDT/

## روش نصب

۱. افزونه Tampermonkey را روی مرورگر نصب کنید.

۲. فایل [bitpin-usdt.user.js](./bitpin-usdt.user.js) را باز کنید.

۳. گزینه **Raw** را انتخاب کنید یا کد را در Tampermonkey کپی کنید.

۴. اسکریپت را ذخیره و فعال کنید.

۵. صفحه نمودار تتر بیت‌پین را بازآوری کنید.

## نحوه عملکرد

اسکریپت عنصر موردنظر را با بررسی تگ HTML،
ویژگی aria-hidden و ترکیب دقیق کلاس‌های CSS شناسایی می‌کند.

پس از شناسایی، عنصر به‌طور کامل از DOM حذف می‌شود.

برای تشخیص و حذف عناصر ایجادشده به‌صورت پویا،
از MutationObserver استفاده می‌شود.

## محدودیت‌ها

- تغییرات فقط در مرورگر کاربر اعمال می‌شوند.
- محدودیت‌های احراز هویت سمت سرور دور زده نمی‌شوند.
- اطلاعات محدودشده از سرور بازیابی نمی‌شوند.
- با تغییر ساختار HTML سایت ممکن است نیاز به اصلاح کد باشد.

## سلب مسئولیت

این پروژه مستقل و غیررسمی است و هیچ وابستگی یا تأییدی
از طرف وب‌سایت بیت‌پین ندارد.

</div>
