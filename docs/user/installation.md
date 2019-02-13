# Installation

::: tip
Maru 0.6 and up is built on top of LineageOS so you can follow the official
LineageOS instructions for your specific device to supplement this guide.
:::

## Prerequisites

1. `adb` installed on your computer (see [LineageOS's
   guide](https://wiki.lineageos.org/adb_fastboot_guide.html))
2. A custom recovery like [TWRP](twrp.html) installed on your device

## Installing Via Update Zip

Maru is distributed via a standard Android update zip so you can flash Maru with a custom recovery just like any other Android ROM.

### Download

1. [Download](https://maruos.com/downloads/) the latest update zip for your device (it will look like `maru-v0.x-update-<device_codename>-<sha256>.zip`)

2. Push the update zip to your device by opening up a terminal (Linux or Mac) or Command Prompt (Windows) and running the following:

```
$ adb push -p maru-v0.x-update-xxxxxxxx-xxxxxxxx.zip /sdcard/
```

::: tip
You can also just download the update zip directly from your device's browser so
you don't need to push it from your PC to your device.
:::

### Backup

3. Reboot to TWRP custom recovery:

```
$ adb reboot recovery
```

You will now be in TWRP recovery.

4. Take a complete back-up before proceeding so it's easy to revert back
   if needed. Just tap `Backup` > `Swipe to Backup`.

### Install

When you are ready to install Maru, do the following:

5. Tap "Install"

6. Tap the Maru update zip you pushed earlier (you may need to scroll down)

7. Swipe right to confirm flash of Maru

8. Hit back till you are at the main screen, then `Wipe`

9. Swipe right to Factory Reset (this will still keep your back-ups on your sdcard)

10. Tap `Reboot System`

::: tip
You may be asked to install SuperSU to root your device. If you know what
rooting your device means and want to have it rooted then go ahead. Otherwise,
it's best to tap "Do Not Install".
:::

Regardless of your installation method, the first boot will take 2-3 minutes so please be patient.
