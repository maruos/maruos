# Tips

Here are some tips from our users for making the most of your Maru OS experience.

### Start your desktop in the background

By default, Maru will only spin up your desktop when you connect to an HDMI display. If you don't have a display around and still want to start your desktop (for remote access via SSH / VNC in the tips below for example), just navigate to Settings > Desktop > Dashboard and switch the toggle to "On".

### Change the default desktop account password

If you are using Maru Desktop graphically with an HDMI display and BT keyboard/mouse or over VNC:

1. Open up a Terminal (Applications Menu > Terminal Emulator)
2. Type `passwd maru`
3. Follow the instructions to set your new password*

Otherwise, if you are using Maru Desktop via ssh:

1. ssh into the default `maru` account (`ssh maru@<your-ip-address>`)
2. Type `passwd`
3. Follow the instructions to set your new password*

Please remember to use a strong password!

**If you are prompted for the current password before setting your new password, the default password is "maru".*

### Access your desktop with SSH

SSH is disabled on Maru Desktop for security reasons, so you will need to first connect your device to an external display and pair up a BT keyboard and mouse to access the desktop and enable SSH for future access.

1. Before enabling SSH for the first time, please change the default password on the default maru account. This can easily be done by opening up a Terminal, typing `passwd maru`, and following the prompts.

1. Once you have set a strong password on the default account, open up a Terminal and enable sshd with:

```bash
$ sudo systemctl enable ssh
$ sudo systemctl start ssh
```
   
   Now SSH services will automatically start when you spin up Maru Desktop so you won't need to repeat this step next time.

1. Determine your phone's IP address. Settings > About Phone > Status > IP address. On my local network, my phone's IP address is `10.0.0.10`.

1. In an SSH client on the same network (could be your phone) `ssh maru@10.0.0.10` and enter the password you set earlier.

1. If prompted to trust the certificate provided, enter `y`

*Note that you can simply connect to `localhost` if you are connecting to your desktop from the Android side of the device you are running Maru on--an SSH app like JuiceSSH works quite well.*

### Access your desktop with VNC

*Make sure your desktop is running first! See above tip.*

1. Install a VNC server: `sudo apt-get install x11vnc`
1. Run the server and protect it with a password that you supply: `x11vnc -forever -display :0 -usepw`
1. In a VNC client (could be your phone) connect to the phone's IP address with the password supplied.

Thanks @curiousercreative for the original tip!

### Build and replace Maru's Debian installation

If you want a fresh Desktop, you don't have to reinstall Maru.

This method requires USB Debugging with su added. I don't know if would work from a non-Debian based system.

 ```bash
 git clone https://github.com/maruos/blueprints
 cd blueprints
 # if build fails, look at output for missing packages. e.g. lxc package is required.
 sudo ./build.sh        
 sudo tar xzf out/maru-*-rootfs-*.tar.gz # no gunzip in android :(
 sudo tar cf m.tar rootfs
 sudo rm -rf rootfs
 adb push m.tar /sdcard/
 adb shell
 su
 cd /data/maru/containers/jessie
 rm -rf rootfs
 tar xf /sdcard/m.tar
 rm /sdcard/m.tar
 ```

You could also get the rootfs from within one of the Maru release zips instead of building it.


