# Porting

Interesting in porting Maru OS to a new device? This guide will help walk you through the process.

## Overview

At a high-level, your porting flow will look like this:

0. Announce your desired port on @chevdroid's [device port thread](https://groups.google.com/forum/#!topic/maru-os-dev/YufKu3w2xkQ)
0. Create a porting thread for your device where you can ask questions during the porting process and share knowledge. Here are some example threads:
   * [Nexus 7](https://groups.google.com/forum/#!topic/maru-os-dev/zdT_qHydRXA)
   * [LG G4 (H815)](https://groups.google.com/forum/#!topic/maru-os-dev/-K_lysxngD4%5B126-150%5D)
   * [Nexus 6P](https://groups.google.com/forum/#!topic/maru-os-dev/3KxiW2ZVlQU)
   * [Nexus 5X](https://groups.google.com/forum/#!topic/maru-os-dev/U9EpPQ0SFb0)
0. Hack on your port, ask questions, share your builds for others to test, etc. on your thread until it's pretty stable
0. Submit your port to The Maru OS Project and fix any issues found during review
0. Celebrate when your device port rolls out with the latest official builds!

## How do I get started on a port?

Adding a device port to Maru OS is nearly the same as adding a port to the Android Open Source Project (AOSP). You will typically need to provide two new repositories for your device:

0. `android_device_<vendor>_<codename>`: your device-specific configuration
0. `android_kernel_<codename>`: kernel source for your device

Create these repos on your personal GitHub account. During your early bringup phase, you can hack on your device port and push up to these repos to share your work.

Once your port is stable and is ready to be submitted, a maruos org member will re-create them under the official maruos org and you can submit your work as a PR.

Now, let's take a closer look at these.

### `android_device_<vendor>_<codename>`

Example: https://github.com/maruos/android_device_lge_bullhead

This is the hardware-specific configuration for your device. Ideally, your device vendor has an open-source repository that you can use as a starting point, like with the Nexus devices. If not, you'll have to use a similar device repo and tweak things to make it work.

**Customizations needed:** You will need to create a new product configuration and lunch option for your device called `maru_<codename>` that will make your device "maru-aware". See this [patch](https://github.com/maruos/android_device_lge_bullhead/commit/d6792569a47e1c30b517a944c0dfae58e3aa9547) that adds the `maru_bullhead` product for bullhead (Nexus 5X) as an example.

### `android_kernel_<codename>`

Example: https://github.com/maruos/android_kernel_bullhead

This is the actual Linux kernel source for your device. The kernel source is under the GPL license, so your device vendor should make it available somewhere on their website.

**Customizations needed:** You will need to create a new defconfig that enables some kernel options that Maru OS requires. See this [patch](https://github.com/maruos/android_kernel_bullhead/commit/a414e3e60199b01e569531af14a9845df3a0f66a) for bullhead as an example.

The easiest way to get the ball rolling is to start off with the default kernel defconfig for the device. For bullhead, this would be `arch/arm64/configs/bullhead_defconfig`. You can tell the kernel make system to use this defconfig with:

    $ ARCH=arm64 make bullhead_defconfig
    
To check which options are missing from your kernel config that are required for Maru, you can use the `lxc-checkconfig` tool from the Linux Containers Project (LXC):

    $ CONFIG=.config lxc-checkconfig

You will need to enable any options that are marked as "required".

You can add these options directly to the `.config` or you can open up the kernel's configuration UI by running:

    $ ARCH=arm64 make menuconfig
    
After you are happy with your config, save it as a defconfig with:

    $ ARCH=arm64 make savedefconfig
    
You can then copy your new Maru-supported kernel defconfig over to `arch/arm64/configs`, where the build process can pick it up:

    $ mv defconfig arch/arm64/configs/maru-bullhead_defconfig

Now [update your device config](https://github.com/maruos/android_device_lge_bullhead/commit/d6792569a47e1c30b517a944c0dfae58e3aa9547#diff-78ec901c9c29ef6a20b79592fd93f941R34) to use your new kernel config!

## How do I get my port accepted as an official device?

Before your port can be accepted as an official device, it must be tested by at least a few people and confirmed to work pretty well. "Works pretty well" means that all the hardware (graphics, audio, cellular, wifi, etc.) works and that Maru Desktop works. Your porting thread is a good place to share your builds and get feedback.

Once you're confident your port works well, and you can commit to being a device maintainer, you can kick off the process to get your port included in Maru OS:

0. Get in touch with one of the maruos members on the forums or our gitter who can help guide you through the process
0. Once we check out your thread and confirm that it works well, we'll re-create your device repos on the org
0. Send over your work via a PR to the freshly created device repos on maruos, and work with us to fix any issues found in your PR (all commits signed off as per contribution guidelines, etc.)
0. We'll merge your PR and give you write access to these repos
0. Send us a PR to add the new device repos to the Maru OS manifest


## Known Porting Issues

### Container login failures

Kernels before 3.15, especially 3.10, cause PAM errors that prevent user authentication in secondary namespaces—even with correct credentials! This is known to affect the Nexus 5X and Nexus 6P. Note that this *does not* affect the 3.4 kernel for the Nexus 5 or Nexus 7.

**Fix**: apply this backported 3.15 kernel [patch](https://github.com/maruos/android_kernel_msm/commit/86406af61755852d74d23b051d4327565528a506)

Related threads:
* https://groups.google.com/d/msg/maru-os-dev/-K_lysxngD4/1qtkeMgYCwAJ
* https://groups.google.com/d/msg/maru-os-dev/3KxiW2ZVlQU/8X7fyd5HBgAJ

More info:
* https://github.com/docker/docker/issues/5899
* https://github.com/sequenceiq/docker-pam

### No desktop output on HDMI screen with arm64 devices (https://github.com/maruos/blueprints/issues/5)

If porting to an arm64 device and you are using the prebuilt armhf desktop container image, note that mclient (graphics bridge for the desktop) will crash. This is because mclient is only packaged as an armhf 32-bit binary and it has issues dealing with a 64-bit mflinger.

**Fix**: Please build an arm64 desktop container with the master branch of https://github.com/maruos/blueprints and use that for your builds:

    $ ./build.sh -n debian -- -a arm64 --minimal

Related threads:
* https://groups.google.com/d/msg/maru-os-dev/-K_lysxngD4/FERf_ZGjCwAJ
