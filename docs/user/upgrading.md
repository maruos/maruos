# Upgrading

There are two ways to upgrade Maru OS.

## Option 1: Do a clean install

The easiest way to upgrade is to just do a fresh install with the new version. Watch out though, this will wipe all of your data, so make sure to back up anything important!

See the [[Installation Guide|Installation-Guide]].

## Option 2: Install the update zip *without* a factory reset

If you have important data on your device that you would like to keep, you can flash the new version's update zip in a custom recovery like [[TWRP]]. This will only touch your system partition, so all of your data will be preserved.

*Tip: Take a complete backup first!*

Follow the normal [[update zip installation|Installation-Guide#option-2-update-zip]], **but skip the factory reset**!

Make sure you also read any Upgrade Notices in the release [changelog](https://github.com/maruos/maruos/blob/master/CHANGELOG.md) that will point out version-specific upgrade issues and workarounds.

### Known Issues with Option 2

#### Desktop updates ([#1](https://github.com/maruos/maruos/issues/1))

The update process will not touch Maru Desktop if it finds an existing installation. That is, any data or configuration you have saved on your desktop will be preserved after the update. Unfortunately, that means you will also miss out on any updates to the desktop system (check the releases changelog to see if there were any desktop updates).

If you can back-up all the important data/configuration from your desktop system to a safe place (the sdcard folder for example), you can just delete the desktop folder from your device and Maru will re-sync the latest version after a reboot. Here's step-by-step instructions:

1. Back up any important data
2. Reboot to recovery

        $ adb reboot recovery
3. Open up the File Manager ("Advanced" > "File Manager")

4. Navigate to `/data/maru`

5. Tap the folder management icon at the bottom right of your screen

6. Tap "Delete" and swipe to confirm

7. Tap "Reboot System"

A few minutes after reboot, Maru will sync up the new desktop image, and you can then start the desktop like usual. If you backed up any data, you can restore it at this point too.

#### Gapps

If you have gapps installed, you will need to re-install them after the upgrade. All of your apps (and their data) will still be there, but the Play store will freak out and disappear.

Just go ahead and flash the gapps zip again, add your Google account if requested, and most of your apps should work just like before. If your app still does not start properly, you will need to uninstall and reinstall the app to fix it--this has been seen with apps like Play Music or YouTube.
