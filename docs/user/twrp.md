# TWRP

[Team Win Recovery Project (TWRP)](https://twrp.me/) is custom Android recovery software. It includes special features that aren't available with your device's stock recovery software.

## Installing TWRP

There are many ways to install TWRP, but here's one that works well.

1.  Download TWRP for your device (here's a [link](https://twrp.me/Devices/) where you can search for your device)

2.  Connect your device to your computer, [enable USB Debugging](/user/usb-debugging.html),
    and follow the instructions below:

    *Make sure to substitute the correct name of the file you downloaded for anything in brackets.*

    Open up a terminal and run the following:

        $ adb reboot bootloader

    You are now in the bootloader.

3.  Check your bootloader lock state on the line "LOCK STATE - ...".

    If it says "unlocked", skip to step 4. If it says "locked", you will need to first unlock your bootloader:

        $ fastboot oem unlock

    Make sure you follow the on-screen instructions to verify the unlock.

    After unlocking, hit the `Power` button to reboot your device. After it boots back up, re-enable
    USB debugging and reboot to the bootloader again:

        $ adb reboot bootloader

4.  Flash TWRP:

        $ fastboot flash recovery <twrp filename>.img

    If above command failed with no `recovery` partition error, you can try the following command:

        $ fastboot flash boot <twrp filename>.img

5.  Use the `Volume Up` button on your device to cycle through the bootloader options
    to "Recovery mode" and hit the `Power` button to boot into TWRP recovery

6. Swipe right to let TWRP modify the system partition (this lets TWRP avoid being overwritten by the stock recovery when you reboot)

7. Tap "Reboot", then tap "System" to reboot

*Tip: You may be asked to install SuperSU to root your device. If you know what rooting your device means and want to have it rooted then go ahead. Otherwise, it's best to tap "Do Not Install".*
