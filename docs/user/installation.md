# Installation

### Warning

Before deciding to install Maru OS on your device, please be aware of the following:

**Installing Maru will wipe all of your personal data so please back up anything important!**

You can back up important stuff like photos/videos/text messages/call logs somewhere off of your device, like your PC or the cloud. There are several apps available from the Play store that can help you with this--just search "backup".

If you use a custom recovery that supports backups like TWRP, make sure to take a complete device backup before installing Maru using the update zip.

**Ensure you use the correct build for your device!**

Please double-check that the codename in the zip you downloaded matches your device's
codename. For example, `maru-v0.3-installer-hammerhead-windows-6773e9ba.zip` is
only for hammerhead (Nexus 5).

**DISCLAIMER**: The Maru OS Project authors will not be held responsible for any loss of data or damage to your device. Keep in mind that installing aftermarket firmware may void your device's warranty.

## Option 1: Easy installers

The easy installers are a great choice if you aren’t familiar with custom ROMs and just want Maru on your device without having to go through the hassle of installing a custom recovery. The installers also come with a quick uninstall script so you can get back to a stock system in no time. Basically, if you don't know much about installing custom software on your phone and want something really easy, use this approach!

Pros: All you need to do is run a script and follow along. The installer includes `adb` and `fastboot` tools and is capable of unlocking your bootloader and flashing Maru in a few steps.

Cons: You need to do manual back-ups of your important data. You can't keep complete backups if you use a custom recovery like TWRP.

**WARNING**: Installing Maru will wipe all of your personal data so please back up anything important first!

0. Download the latest installer zip for your device and OS from the [latest release](https://github.com/maruos/maruos/releases) to your computer. Each installer zip is tagged with the device and OS it's meant for, e.g. `maru-v0.4-installer-hammerhead-windows-0db8cdcb.zip` is the v0.4 installer for hammerhead on windows.

0. Extract the installer zip to a convenient location (e.g. Downloads directory).

0. Connect your device to your computer using a USB cable.

0. Run the installer script by referring to the instructions below for your OS.

0. Wait a few minutes for the installer to complete. The installer will print out each step it goes through to install Maru OS on your device. It will also guide you through fixing common issues such as [[enabling USB Debugging|USB-Debugging]], so just follow along. If the installation was successful, your phone will reboot and you should see a new boot splash screen with the Maru logo to indicate your first boot into Maru OS!

0. Optional: [Restore Google Apps (Play Store)](https://groups.google.com/d/msg/maru-os/S8PUEqqK10M/NMI9LFUyAQAJ)

### Mac

Navigate to the unzipped installer folder, right-click (Control + click) "install",
and select Open.

*Tip: Depending on your security settings, you may get a dialog that says
"install is from an unidentified developer. Are you sure you want to open it?".
Please select Open. See https://support.apple.com/kb/PH21769?locale=en_US for
more details. We promise we're not malware :)*

### Linux

0. Open a terminal.

0. Change directory to the unzipped installer (e.g. `cd Downloads/maru-v0.4-installer-hammerhead-linux-6b1b3aeb`).

0. Run the installation script by typing `./install.sh` into the terminal.

### Windows

First, install the Google USB Driver to communicate with Nexus devices:

0.  [[Enable USB Debugging|USB-Debugging]] on your device

0.  Download the driver from http://developer.android.com/sdk/win-usb.html

0.  Install the driver following the instructions on
    http://developer.android.com/tools/extras/oem-usb.html#InstallingDriver

    NOTE: Step 3 for Windows 7 says "Select 'Devices' in the left pane". If you
    don't see 'Devices', look instead for 'Device Manager'.

Then navigate to the unzipped installer folder and double-click "install".

*Tip: We have found that installing the Google USB Driver can be very confusing.
You may need to select the driver for your device multiple times before
Windows finally installs it correctly. You may also need to wait while Windows
installs the driver a second time after your device boots into recovery mode.*



## Option 2: Update zip

*See [latest release](https://github.com/maruos/maruos/releases) for downloads. Each update zip is tagged with the device it is meant for, e.g. `maru-v0.4-update-hammerhead-dd793179.zip` is the v0.4 update zip for hammerhead.*

The update zip lets you flash Maru with a custom recovery just like any other Android ROM. That means you can keep custom recovery back-ups and use Maru as a secondary in MultiROM!

Pros: Keep your backups, works with TWRP and MultiROM

Cons: Terminal commands and manual steps

Prerequisites: `adb` binary in your PATH and [[TWRP installed|TWRP]]

First, download the latest update zip for your device (it will look like `maru-v0.x-update-<device>-<sha1>.zip`) and push it to your device's sdcard:

Open up a terminal (Linux or Mac) or Command Prompt (Windows) and run the following:

    $ adb push -p <maru update filename>.zip /sdcard/
    $ adb reboot recovery

You will now be in TWRP recovery. 

*Tip: This is a good time to make a complete back-up before proceeding: "Backup" > "Swipe to Backup".*

When you are ready to install Maru, do the following:

0. Tap "Install"

0. Tap the Maru update zip you pushed earlier (you may need to scroll down)

0. Swipe right to confirm flash of Maru

0. Hit back till you are at the main screen, then "Wipe"

0. Swipe right to Factory Reset (this will still keep your back-ups on your sdcard)

0. Tap "Reboot System"

*Tip: You may be asked to install SuperSU to root your device. If you know what rooting your
device means and want to have it rooted then go ahead. Otherwise, it's best to tap
"Do Not Install".*

Regardless of your installation method, the first boot will take 2-3 minutes so please be patient.

## Community Guides

* [Maru OS e Instalación de Google Apps (Spanish)](http://www.elsate.com/viewtopic.php?t=1015)
