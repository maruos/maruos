# Building

Maru hooks into the AOSP build system for the majority of the build process.

## Build the desktop image

*Tip: You can just download the latest prebuilt image from [here](https://github.com/maruos/blueprints/releases) if you don't want to build the desktop image yourself. It can take up to 30 minutes for the build to finish.*

The one exception to the AOSP build system is the build process for the desktop image.

    $ cd vendor/maruos/blueprints
    $ ./build.sh -b debian -n stretch-container -- -r stretch -a arm64 --minimal

*Tip: You may need to run the last `./build.sh` script with sudo if you are using docker.*

After half-an-hour or so, you should have the final desktop image under `out/`. It will look like `maru-v0.x-jessie-rootfs-$SHA1.tar.gz`.

Copy the final image over to `vendor/maruos/prebuilts`, where the AOSP build system will pick it up in the next step:

    $ cp out/maru-* ../prebuilts/desktop-rootfs.tar.gz

The desktop image will be cached under `vendor/maruos/prebuilts` from here on out so you won't need to build it often. Just remember to generate a new image whenever [maruos/blueprints](https://github.com/maruos/blueprints) has significant changes to make sure your desktop is up-to-date.

## Build the device image

### Get the device binaries

There are usually proprietary binary drivers ("blobs") you'll need to download to get some of your device hardware to properly function. These are not available as part of the AOSP project, so you will need to obtain them from friendly hardware manufacturers.

For Nexus devices, you can download the blobs straight from the [Nexus Binaries page](https://developers.google.com/android/nexus/drivers). Make sure to select the right binaries for your device and build version!

For example, let's say you want to build Maru OS v0.2.3 for Nexus 5 (hammerhead). v0.2.3 is based on android-5.1.1_r14 (LMY48M), so you would download the [hammerhead LMY48M binaries](https://developers.google.com/android/nexus/drivers#hammerheadlmy48m).

*Tip: To find the right binary version to select, check the manifest file that you used to sync your workspace. You can find the AOSP tag that Maru OS is based on in the manifest's [default.xml](https://github.com/maruos/manifest/blob/master/default.xml#L10). You can correlate this to the build code listed on the Nexus Binaries page [here](https://source.android.com/source/build-numbers.html).*

Uncompress each of the binary tars and run them (they are self-extracting scripts) from the root of your $WORKSPACE, making sure you read and agree to the license terms:

    $ for f in *.tgz ; do tar xzf "$f" ; done
    $ for f in extract-*.sh ; do ./"$f" ; done

You will now have the blobs under `vendor/`.

#### Nexus 5x (bullhead)
For the Nexus 5X, the vendor blobs are not sufficient. The device will bootloop if you use the binary blobs as described above.  
Please see the [bullhead device README](https://github.com/maruos/android_device_lge_bullhead/blob/maru-0.6/README.md) to prepare the vendor directory from a factory image.

### Configure the build system

You'll need to source some environment variables to initialize the build system. From the top of your $WORKSPACE:

    $ . build/envsetup.sh

List the device build configurations with:

    $ lunch

Then select the device you'd like to build. Any of the devices with the prefix `maru_` are supported by Maru OS. For instance, select `maru_hammerhead-userdebug` for a developer build for Nexus 5 (hammerhead).

### Now build!

    $ mka  # performant wrapper for parallel make

*Tip: This build can take a long time. Set up [ccache](https://source.android.com/source/initializing.html#optimizing-a-build-environment) to speed things up.*

## Flashing Builds

Connect your device to your machine over USB, and reboot your device into the bootloader:

    $ adb reboot bootloader

...and flash your build:

    $ fastboot -w flashall

*Tip: You may need to [unlock your bootloader](https://source.android.com/source/running.html#unlocking-the-bootloader) if this is the first time you are flashing custom software.*

### Flashing with Docker

You will need to give your container USB access by bind mounting `/dev/bus/usb`:

    $ docker run --privileged -it \
        -v /dev/bus/usb:/dev/bus/usb \
        -v ~/path/to/$WORKSPACE:/var/maru \
        pdsouza/maruos-devbox
        
## Building an OTA zip

In addition to doing a standard build, you can also build an OTA zip for your device that can be flashed via a custom recovery like TWRP. These OTA zips are the standard format for distributing official Maru images.

To generate the OTA zip:

    $ mka dist
    
After the build is complete, you will find the OTA zip in a file like `out/dist/maru_<device>-ota-eng.xxx.zip`. 

## References / Further Reading
* [AOSP build docs](https://source.android.com/source/requirements.html)
* [[Kernel]]
