---
prev: false
next: false
---

# Samsung S9+ (star2lte)

## Install

::: tip
Samsung devices require a few extra steps to install Maru compared to other devices, but if you follow the steps below you should be up and running in no time!
:::

### 1. Install TWRP

Please carefully follow the official TWRP installation guide for the Samsung S9/S9+ on [XDA](https://forum.xda-developers.com/galaxy-s9/samsung-galaxy-s9--s9-cross-device-development/twrp-exynos-t3763464).

### 2. Install Maru via TWRP

#### Download

1. [Download](https://maruos.com/downloads/) the latest update zip for your device (it will look like `maru-v0.x.y-update-star2lte-<sha256>.zip`)

2. Download [ARI9 vendor zip](https://androidfilehost.com/?fid=11410932744536982158)

3. Push the files you downloaded to your device by opening up a terminal (Linux or Mac) or Command Prompt (Windows) and running the following:

    ```
    $ adb push -p maru-v0.x.y-update-star2lte-xxxxxxxx.zip /sdcard/
    $ adb push -p VENDOR-27_ARI9.zip /sdcard/
    ```

::: tip
You can also just download the update zip and vendor zip directly from your device's browser so
you don't need to push them from your PC to your device.
:::

#### Backup

4. Reboot to TWRP custom recovery:

    ```
    $ adb reboot recovery
    ```

You will now be in TWRP recovery.

5. Take a complete back-up before proceeding so it's easy to revert back
   if needed. Just tap `Backup` > `Swipe to Backup`.

#### Install

6. Tap "Install"

7. Flash the ARI9 vendor zip you downloaded earlier
    * Tap the ARI9 vendor zip
    * Swipe right to confirm flash of the vendor zip

8. Go back and flash the Maru update zip you downloaded earlier
    * Tap the Maru update zip (you may need to scroll down)
    * Swipe right to confirm flash of the Maru zip

9. Hit back till you are at the main screen, then `Wipe`

10. Swipe right to Factory Reset (this will still keep your back-ups on your sdcard)

11. Tap `Reboot System`

::: warning
You may be asked to install SuperSU to root your device. If you know what
rooting your device means and want to have it rooted then go ahead. Otherwise,
it's best to tap "Do Not Install".
:::

Regardless of your installation method, the first boot will take 2-3 minutes so please be patient.

## Accessories

### HDMI Adapters / Docks

::: warning TODO
Add adapters and docks known to work.
:::

### Keyboards / Mice

* See [official accessories](https://maruos.com/accessories/)

## Help

* Ask for help on the [user forum](https://groups.google.com/forum/#!forum/maru-os)
* Report bugs by [opening an issue](https://github.com/maruos/maruos/issues)
* Get in touch with the maintainer on the [device thread](https://groups.google.com/forum/#!topic/maru-os-dev/YVkUiwuKMRQ)
