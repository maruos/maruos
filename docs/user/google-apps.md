# Google Apps

Although Maru runs fine without Google Apps, you can restore access to the Play store for Maru if you choose. You will need to download a third-party Google Apps package and install it alongside the Maru update zip.

::: warning
You must install the Google Apps zip immediately after installing the Maru update zip within TWRP.
If you are installing the Google Apps zip after having already installed Maru, you will need to factory reset to avoid Play store crashes.
:::

## Prerequisites

These are the same prerequisites for installing Maru on your device:

1. `adb` installed on your computer (see [LineageOS's guide](https://wiki.lineageos.org/adb_fastboot_guide.html))
2. [TWRP](../user/twrp.md) custom recovery installed on your device

## Install

1. Download Play apps from a third-party packager like Open Gapps depending on your device architecture and the Maru version you are installing:

   | Device                   | Architecture |
   | ------------------------ | ------------ |
   | Nexus 5 (hammerhead)     | ARM          |
   | Nexus 7 2013 Wi-Fi (flo) | ARM          |
   | Nexus 5X (bullhead)      | ARM64        |
   | Samsung S9+ (star2lte)   | ARM64        |


   | Maru Version                | Open Gapps |
   | --------------------------- | ---------- |
   | 0.6 (Android 8.1)           | [ARM64](https://opengapps.org/?arch=arm64&api=8.1&variant=pico) [ARM](https://opengapps.org/?arch=arm&api=8.1&variant=pico) |
   | 0.3  (Android 6.0)          | [ARM](http://opengapps.org/?arch=arm&api=6.0&variant=pico) |
   | 0.2 and below (Android 5.1) | [ARM](http://opengapps.org/?arch=arm&api=5.1&variant=pico) |

2. Navigate to the folder your downloaded the Google Apps zip and push it to your device in a terminal (Mac or Linux) or Command Prompt (Windows):

```
$ adb push -p open_gapps-xxxxxxxxx.zip /sdcard/
```

3. Follow the installation instructions for your device, and just install the Google Apps zip right after installing the Maru update zip and before rebooting into Maru. The installation process is the exact same for the Google Apps zip and the Maru update zip.
