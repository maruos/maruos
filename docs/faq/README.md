# FAQ

[[toc]]

### Is Maru an app or does it replace my current Android OS?

Maru is firmware for your device, so yes, it will replace your existing Android OS. It’s a bit more complicated to install than an app. Your device will need to factory reset so please back-up any personal data beforehand!

### How do I install Maru on my device?

Read the [Installation Guide](../user/installation.md) and you'll be up and running in no time!

### Which devices are officially supported?

#### 0.6

* Nexus 5 (hammerhead)
* Nexus 5X (bullhead)

#### 0.4 (legacy)

* Nexus 7 2013 Wi-Fi (flo)

All storage sizes and models for each device listed above are supported unless explicit models are listed.

We also have early alpha/beta community builds that are looking for testers, head over to our [device port thread](https://groups.google.com/d/msg/maru-os-dev/YufKu3w2xkQ/9qPEp9EiAQAJ) to check their status.

### Do you plan to support any other devices?

Yeah! From 0.6 onwards we have made the move from using raw [AOSP](https://source.android.com/) as Maru's
base to [LineageOS](https://www.lineageos.org/), which opens Maru up to much broader hardware support.
At this point our device support is limited by the number of devices our
community has access to, so if you'd like to offer to be a tester for a new device, please
let us know in our [developer
forum](https://groups.google.com/forum/#!forum/maru-os-dev).

Keep in mind that the best Maru experience requires hardware HDMI support via either [SlimPort](http://us.slimportconnect.com/slimport-supported-devices/) or [MHL](http://www.mhltech.org/devices.aspx) for displaying the desktop on an external display, so SlimPort and MHL devices will be given first priority.

### What about devices without HDMI support?

Devices without hardware HDMI support (SlimPort or MHL) have a few options for displaying Maru Desktop:

* **Wireless display streaming**: This is officially tested on Chromecast, although other wireless adapters *should* work as long as they are supported by Android (Miracast has been confirmed to work by some of our users). Note that you may need to [restore Google Apps](../user/google-apps.md) to use this feature with Chromecast.

* **DisplayLink**: DisplayLink can stream content to an external display over USB without the requirement for HDMI hardware built into the device, although it requires a DisplayLink dock and installation of the DisplayLink Android app. This has been confirmed to work by our users on devices without HDMI support.

### Which cable/adapter should I use to connect my SlimPort device to an HDMI screen?

You will need a SlimPort USB-to-HDMI cable with a USB charging dongle. You can find a list of officially supported adapters [here](https://maruos.com/accessories/). It’s important that the adapter offers a dongle for charging your device simultaneously since desktop workloads are more taxing on your device’s battery.

### Can I charge my device while plugged in to a monitor?

Yes! We highly encourage you to keep your device charged when using Maru Desktop as your battery usage will increase. Make sure you use an adapter with a USB charging dongle. You can find a list of officially supported adapters [here](https://maruos.com/accessories/).

### How do I prevent my HDMI display from blanking every time my device sleeps?

Make sure that your device is connected to power so that it enters Daydream mode when your screen times out—this will keep your HDMI display powered on while the device displays a clock screensaver. See [above](#can-i-charge-my-device-while-plugged-in-to-a-monitor).

### Which bluetooth keyboard and mouse should I use with Maru?

Any Android-compatible bluetooth keyboard or mouse should work with Maru, but you can find a list of our officially supported accessories [here](https://maruos.com/accessories/). You can also find an unofficial list of accessories that have been tested by users [here](https://groups.google.com/forum/#!topic/maru-os/KucsM6gVUL4).

### My cursor seems to be lagging on Maru Desktop?

The very first time you pair up a bluetooth mouse you may see the cursor start to lag. Just toggle Bluetooth off and on again in your device's Settings app to restore smooth cursor movement (you only have to do this the very first time you pair a new mouse). This issue appears to plague most Nexus devices.

### Can I use Maru Desktop without an external display around?

Yes! You can enable SSH on Maru Desktop so you can easily access your desktop with any other computer on your local network, including your device itself from the Android side! You can also set up VNC to access the desktop graphically. See [Tips](../user/tips.md) for more details.

### Which apps are included in Maru out of the box?

The following Android apps are included for a minimal smartphone environment: Browser, Calculator, Calendar, Camera, Clock, Contacts, Files, Email, Gallery, Music, Phone, Messaging, Settings. You can [install the Play Store](#how-can-i-get-access-to-the-play-store-on-maru) to add more apps as needed.

Maru Desktop is very minimal out of the box to save space, but includes essential tools like Terminal, Firefox, and more. You can use `apt-get` on the desktop to install more apps, like LibreOffice.

### How much extra space will Maru use on my device relative to standard Android?

Maru uses about 2GB more space than stock AOSP out of the box. However, this number is likely smaller if measured relative to your device's factory image (typically filled with pre-installed apps) since Maru ships only the bare minimum set of Android apps.

### What is Maru Desktop built on?

 * [Debian 9 Stretch](https://www.debian.org/)
 * [Xfce](https://xfce.org/)

 ::: tip Note
 We have unofficial desktop images floating around our community based on
 alternative Linux distros, like Ubuntu. Please visit our [developer
 forum](https://groups.google.com/forum/#!forum/maru-os-dev) if you'd like to
 test these out.
 :::

### What is the default sudo password in Maru Desktop?

"maru" is the default sudo password.

::: warning
It is HIGHLY recommended that you change the default password as soon as you log in for security reasons. This can easily be done by opening up a Terminal, typing `passwd maru`, and following the prompts.
:::

### Is Maru open source?

Yes! Maru has been open-sourced under The Maru OS Project. If you're interested in building, porting, and hacking Maru yourself, check out our [Developer Guide](../developer/README.md).

### The outer edges of Maru Desktop do not show up on my TV! How can I fix it?

For historical reasons, TVs frequently use something called overscan that can cause the outer edge of a video source to appear cut-off. Try changing your TV's overscan settings until you see the entire desktop UI.

### How can I get access to the Play store on Maru?

Maru does not include the Play store out of the box. If you would like to restore access to the Play store, please see [this guide](../user/google-apps.md).

### How can I verify that my Maru image hasn't been corrupted or tampered with?

Please verify your image's SHA-256 checksum matches the checksum file for your
device.

You can easily do this in Linux or Mac by downloading the update zip and
checksum file for your device to the same directory, navigating to the download directory in a terminal, and typing:

```
$ shasum -c maru-v0.x.x-sha256sums-device.txt
```

### How can I support Maru?

Thank you for asking! You can support Maru by installing it on your device, spreading the word and showing it off to your friends, helping test new devices, and reporting bugs. You can also financially support the project by paying for the value you get from Maru or becoming a backer on Patreon. You can find all the ways you can support Maru [here](https://maruos.com/support-maru/). Any support is much appreciated!

### Where can I get help?

The best way to get help is to post in our [user forum](https://groups.google.com/forum/#!forum/maru-os). We have a large, knowledgeable, and friendly community that will help point you in the right direction.
