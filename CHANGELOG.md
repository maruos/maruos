# Changelog

## v0.4 (2017-03-24)

### New

* Add official builds for the Nexus 7 2013 Wi-Fi (flo) ([manifest@532f73a](https://github.com/maruos/manifest/commit/532f73af7f38a57a15e5eb73f57e919972de4c1f), see [Nexus 7 thread](https://groups.google.com/forum/#!topic/maru-os-dev/zdT_qHydRXA%5B101-125%5D) for porting details)
* Support full-disk encryption ([#17](https://github.com/maruos/maruos/issues/17))
* Merge AOSP updates for Marshmallow, including security patches through February 1, 2017 ([manifest#3](https://github.com/maruos/manifest/issues/3), [manifest#4](https://github.com/maruos/manifest/issues/4), [manifest#7](https://github.com/maruos/manifest/issues/7), [manifest#10](https://github.com/maruos/manifest/issues/10)). Note that hammerhead's security support period has ended on October 2016, so hammerhead will no longer be receiving kernel patches or blob updates as decribed in [our patch policy](https://github.com/maruos/maruos/wiki/Security).
* Upgrade LXC from 1.0.7 to 1.0.9 ([platform_external_lxc#2](https://github.com/maruos/platform_external_lxc/issues/2#issuecomment-279597524))
* Add a device check to installers to prevent accidentally flashing the wrong image for a device ([installer@2856264](https://github.com/maruos/installer/commit/2856264e0f5ff24fe71aaff844514b01e3e95161), [installer@d7f4ec0](https://github.com/maruos/installer/commit/d7f4ec00fd5dd9ea9ecf79ef8dc23c60c1ea5f91))

### Fixes

* Fix Browser crash when downloading a file ([#52](https://github.com/maruos/maruos/issues/52))
* Fix root account networking permissions ([#60](https://github.com/maruos/maruos/issues/60))
* Fix race condition on first boot that occasionally prevented Maru Desktop from starting until a reboot or factory reset ([vendor_maruos@f07b712](https://github.com/maruos/vendor_maruos/commit/f07b71254a50b78352f8834005b88d3eab818079))

### Changes

* New non-system users created in Maru Desktop are automatically added to the correct groups for networking access and `/mnt/sdcard` access ([blueprints@bc1ae14](https://github.com/maruos/blueprints/commit/bc1ae145cf128cd617acf88c8cbffcd4ce40134f))
* Container configuration is now consolidated in a single file `/data/maru/containers/jessie/config` ([vendor_maruos@970f0b3](https://github.com/maruos/vendor_maruos/commit/970f0b3626821b1622230666bc17ca66c8399d9a))

### Shoutouts

* [TMartinPPC](https://github.com/TMartinPPC): Nexus 7 2013 Wi-Fi (flo) support
* [NoelMacwan](https://github.com/NoelMacwan): AOSP updates for Marshmallow, including android-6.0.1_r72, android-6.0.1_r77, and android-6.0.1_r78

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
