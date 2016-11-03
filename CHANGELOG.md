# Changelog

## v0.3 (2016-11-03)

### Features

* Upgrade from Lollipop (5.1.1_r14) to Marshmallow (6.0.1_r17)
* Enable starting Maru Desktop in the background (no HDMI display needed)
* Add option to improve resolution matching support for non-1080p displays under
  Settings > Desktop > Tweaks

### Fixes

* Fix desktop screen occasionally showing up on phone display
* Fix DPI issues that sometimes render fonts weirdly

### Changes

* Enable SSH services in Maru Desktop by default
* Use Firefox ESR as the default browser in Maru Desktop
* Set the root account password to 'root' in Maru Desktop

### Upgrade Notices

When upgrading Maru OS without a factory reset (see [Upgrading: Option 2](https://github.com/maruos/maruos/wiki/Upgrading#option-2-install-the-update-zip-without-a-factory-reset)), please be aware of the following.

#### New sdcard access permissions

A new group must be added in Maru Desktop to access the sdcard mount.
Assuming the user account is 'maru':

    $ sudo addgroup --gid 1015 sdcard_rw
    $ sudo adduser maru sdcard_rw

After restarting the desktop, the sdcard mount will be accessible again.

## v0.2.4 (2016-08-24)

Open-source version of v0.2.3.

Note there is no official release since it is basically the same as v0.2.3.

## v0.2.3 (2016-06-04)

This is the first public release of Maru OS!

## v0.2.3-beta (2016-05-10)

* Mount entire sdcard in desktop
* Update desktop image with latest packages
* Fix dropped Bluetooth device key events

## v0.2.2-beta (2016-03-08)

* Fix system time defaulting to 1970s on reboot (after network time sync-up)
* Add "Maru version" to Settings > About Phone
* Strip harmless audit logs

## v0.2.1-beta (2016-02-19)

* Add HELP.txt instructions to restore gapps from 3rd party
* Strip verbose logging

## v0.2-beta (2016-02-16)

* Properly format storage for 32GB Nexus 5
* Recover properly from factory resets
* Optimize image size

## v0.1a-beta (2016-02-08)

* Fix app compatibility

## v0.1-beta (2016-02-04)

* Initial release
