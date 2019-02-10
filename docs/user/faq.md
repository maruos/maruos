# FAQ

[[toc]]

### Is Maru an app or does it replace my current Android OS?

Maru is firmware for your device, so yes, it will replace your existing Android OS. It’s a bit more complicated to install than an app. Your device will need to factory reset so please back-up any personal data beforehand!

### How do I install Maru OS on my device?

Read the [Installation Guide](https://github.com/maruos/maruos/wiki/Installation-Guide) and you'll be up and running in no time!

### Which devices are officially supported?

* Nexus 5 (hammerhead)
* Nexus 7 2013 Wi-Fi (flo)
* Nexus 5X (bullhead)

All storage sizes and models for each device listed above are supported unless explicitly stated otherwise.

We also have early alpha/beta community builds that are looking for testers, head over to our [device port thread](https://groups.google.com/d/msg/maru-os-dev/YufKu3w2xkQ/9qPEp9EiAQAJ) to check their status.

### Do you plan to support any other devices?

Yeah! Nexus devices will be given first priority. Non-Nexus devices will be primarily community-driven ports off of the open source project.

Keep in mind that Maru currently requires hardware HDMI support via either [SlimPort](http://us.slimportconnect.com/slimport-supported-devices/) or [MHL](http://www.mhltech.org/devices.aspx) for displaying the desktop, so devices that do not support these standards will have to wait until Maru offers a workaround.

### Which cable/adapter should I use to connect my Nexus 5 to an HDMI screen?

You will need a SlimPort USB-to-HDMI cable with a USB charging dongle. You can find a list of officially supported adapters [here](http://maruos.com/#/accessories). It’s important that the adapter offers a dongle for charging your device simultaneously since desktop workloads are more taxing on your device’s battery.

### Can I charge my device while plugged in to a monitor?

Yes! We highly encourage you to keep your device charged when using Maru Desktop as your battery usage will increase. Make sure you use an adapter with a USB charging dongle. You can find a list of officially supported adapters [here](http://maruos.com/#/accessories).

### How do I prevent my HDMI display from blanking every time my device sleeps?

Make sure that your device is connected to power so that it enters Daydream mode when your screen times out--this will keep your HDMI display powered on while the device displays a clock screensaver. See [[above|FAQ#can-i-charge-my-device-while-plugged-in-to-a-monitor]].

### Which bluetooth keyboard/mouse should I use with Maru?

Any Android-compatible bluetooth keyboard or mouse should work with Maru, but you can find a list of our officially supported accessories [here](http://maruos.com/#/accessories). You can also find an unofficial list of accessories that have been tested by users [here](https://groups.google.com/forum/#!topic/maru-os/KucsM6gVUL4).

### My cursor seems to be lagging on Maru Desktop?

The very first time you pair up a bluetooth mouse you may see the cursor start to lag. Just toggle Bluetooth off and on again in your device's Settings app to restore smooth cursor movement (you only have to do this the very first time you pair a new mouse). This issue appears to plague most Nexus devices.

### Can I use Maru Desktop without an HDMI monitor around?

You can enable SSH on Maru Desktop so you can easily access your desktop with any other computer on your local network, including your Maru OS device itself from the Android side! You can also set up VNC to access the desktop graphically. See [[Tips]] for more details.

### Which apps are included in Maru OS out of the box?

The following Android apps are included for a minimal smartphone environment: Browser, Calculator, Calendar, Camera, Clock, Contacts, Downloads, Email, Gallery, Music, Phone, Messaging, Settings. You can install the Play Store to add more apps as needed.

The desktop ships with essential productivity tools like LibreOffice (sheets, docs, presentation), Terminal, Iceweasel (based on Firefox), and more. You can use `apt-get` on the desktop to install more apps.

Please note that the set of default apps may change for new versions of Maru OS.

### How much extra space will Maru use on my device relative to standard Android?

Maru uses about 2GB more space than stock AOSP out of the box. However, this number is likely smaller if measured relative to your device's factory image (typically filled with pre-installed apps) since Maru ships only the bare minimum set of Android apps.

### What is Maru Desktop based on?

Debian 8 Jessie and Xfce.

### What is the default sudo password in Maru Desktop?

"maru" is the default sudo password.

It is HIGHLY recommended that you change the default password as soon as you log in for security reasons. This can easily be done by opening up a Terminal, typing `passwd maru`, and following the prompts.

### Is Maru open source?

Yes! Maru has been open-sourced under The Maru OS Project. If you're interested in poking around, check out the [[Developer Guide]].

### The outer edges of Maru Desktop do not show up on my TV...how can I fix it?

For historical reasons, TVs frequently use something called overscan that can cause the outer edge of a video source to appear cut-off. Try changing your TV's overscan settings until you see the entire desktop UI.

### How can I get access to the Play store on Maru OS?

Maru OS does not include the Play store out of the box. If you would like to restore access to the Play store, please see [this forum guide](https://groups.google.com/d/msg/maru-os/S8PUEqqK10M/NMI9LFUyAQAJ).

### How can I verify that my Maru OS image hasn't been corrupted or tampered with?

Please use [my PGP public key](https://gist.github.com/pdsouza/27dae49b3cbb03179ca24a6e05bfd66e) to verify the checksums `asc` file included with the release and compare the hashes with your download.
