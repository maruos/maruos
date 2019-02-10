# Setting Up Your Environment

There are two ways to get your dev environment up and running.

## Docker Setup (recommended)

It is highly recommended to use [Docker](https://github.com/docker/docker) for Maru OS development! With Docker, you can guarantee that your build environment is set up the exact same way as the official build machines. It's also really easy to update your environment as dependencies change.

First, install Docker on your machine via the [official instructions](https://docs.docker.com/engine/installation/linux/).

Then just pull down the developer image for the branch you want to build, e.g. `maru-0.6`:

    $ docker pull pdsouza/maruos-devbox:maru-0.6

To run the image and enter the default "dev" account:

    $ docker run --privileged -it pdsouza/maruos-devbox

*Tip: The default "dev" user has password-less access to sudo.*

One more thing: it's a good idea to use a [data volume](https://docs.docker.com/storage/volumes/) to mount a host directory that you will use as your main workspace. This will let you persist your workspace even if you end up deleting your container, as well as share the workspace between other containers.

To mount your host workspace directory $WORKSPACE into the container, use the `-v` flag:

    $ docker run --privileged -it -v ~/path/to/$WORKSPACE:/var/maru pdsouza/maruos-devbox

This will mount the host workspace into `/var/maru`, but you can specify any path you like.

## Traditional Setup

If you'd rather not use docker, you can still set up your environment the old-school way.

Just take a look at the [Dockerfile](https://github.com/pdsouza/maruos-docker/blob/maru-0.6/Dockerfile) for the branch you would like to build and install these packages manually.

*Tip: In-house builds of Maru OS use 64-bit Debian 9 Stretch, but most modern 64-bit Linux distributions should work. If you aren't using Debian, you may need to find the corresponding packages for your distribution.*

## USB Access

Whether you are using Docker or not, you will need to configure USB access on your host to flash your builds:

    $ wget -S -O - http://source.android.com/source/51-android.rules | sed "s/<username>/$USER/" | sudo tee >/dev/null /etc/udev/rules.d/51-android.rules; sudo udevadm control --reload-rules

See "Configuring USB Access" in the [AOSP docs](https://source.android.com/source/initializing.html#setting-up-a-linux-build-environment) for more info.
