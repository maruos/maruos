# Overview

Interested in building Maru OS yourself or contributing to the project?

This guide will walk you through setting up a development environment, building your very own Maru OS image, and installing it on your device!

But first, some basics.

## Structure

Maru follows a very similar project structure to [AOSP](https://source.android.com/). There are lots of different git repositories that are part of Maru, all of which are managed by Repo and the main manifest. Repo syncs all of these different repositories to your workspace and lets you easily work with them.

## Naming Conventions

There are a few naming conventions the project uses to navigate the dozens of
git repositories that make up Maru.

* Simply-named repositories like [mflinger](https://github.com/maruos/mflinger) or [blueprints](https://github.com/maruos/blueprints) are specific to Maru and will end up under your workspace's `vendor/maruos/` folder
* Multi-word repositories fit into the AOSP workspace structure and list the project's directory path in your workspace, e.g. [platform_external_lxc](https://github.com/maruos/platform_external_lxc) is placed under external/lxc in your workspace ("platform" is added just to keep it consistent with AOSP's naming)
* Upstream AOSP forks are prefixed by `android_`
* Device-specific repositories are prefixed by `device_`
* Upstream projects will have the `platform_external_` prefix to match how AOSP manages upstream projects

## Branching

Maru maintains several branches that correspond to Android versions.

The branches that we actively develop are:

| Branch    | Base        |
| --------- | ----------- |
| `master`  | AOSP 6.0 |
| `cm-14.1` | LineageOS 14.1 (AOSP 7.1) |
| `maru-0.6` | LineageOS 15.1 (AOSP 8.1) |

## Getting Help

If you are ever stuck or have questions, the Maru developer community is happy
to help! Here are some channels to get in touch:

* [developer list](https://groups.google.com/forum/#!forum/maru-os-dev)
* [gitter](https://gitter.im/maruos/maruos)
