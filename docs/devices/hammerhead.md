---
sidebar: auto
prev: false
next: false
---

# Nexus 5 (hammerhead)

The trusty old Nexus 5 was the first device to run Maru and remains Maru's most well-tested device.

## Install

### Prerequisites

1. `adb` installed on your computer (see [LineageOS's guide](https://wiki.lineageos.org/adb_fastboot_guide.html))
2. [TWRP](../user/twrp.md) custom recovery installed on your device

### Install Maru via TWRP

#### Download

1. [Download](https://maruos.com/downloads/) the latest update zip for your device (it will look like `maru-v0.x.y-update-hammerhead-<sha256>.zip`)

    * (Optional) If you would like to [restore access to the Play store](../user/google-apps.md), you can download a third-party Google Apps zip and install it alongside Maru during this installation process.

2. Push the update zip to your device by opening up a terminal (Linux or Mac) or Command Prompt (Windows) and running the following:

```
$ adb push -p maru-v0.x.y-update-hammerhead-xxxxxxxx.zip /sdcard/
```

::: tip
You can also just download the update zip directly from your device's browser so
you don't need to push it from your PC to your device.
:::

#### Backup

3. Reboot to TWRP custom recovery:

```
$ adb reboot recovery
```

You will now be in TWRP recovery.

4. Take a complete back-up before proceeding so it's easy to revert back
   if needed. Just tap `Backup` > `Swipe to Backup`.

#### Install

When you are ready to install Maru, do the following:

5. Tap "Install"

6. Tap the Maru update zip you pushed earlier (you may need to scroll down)

7. Swipe right to confirm flash of Maru

8. Hit back till you are at the main screen, then `Wipe`

9. Swipe right to Factory Reset (this will still keep your back-ups on your sdcard)

10. Tap `Reboot System`

::: warning Note
You may be asked to install SuperSU to root your device. If you know what
rooting your device means and want to have it rooted then go ahead. Otherwise,
it's best to tap "Do Not Install".
:::

Regardless of your installation method, the first boot will take a few minutes so please be patient.

## Accessories

See [official accessories](https://maruos.com/accessories/).

## Help

* Ask for help on the [user forum](https://groups.google.com/forum/#!forum/maru-os)
* Report bugs by [opening an issue](https://github.com/maruos/maruos/issues/new)
* Get in touch with the device maintainer: [@pdsouza](https://github.com/pdsouza)
