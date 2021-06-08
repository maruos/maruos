# Downloading the Code

Maru OS uses Repo, just like AOSP, to manage all the project code. Repo makes it easy to work on projects with several Git repositories.

## Set up Repo

Before you can install the Repo client, ensure you have a `/bin` folder in your `PATH`. The AOSP docs suggest creating this folder in your home directory:

    $ mkdir ~/bin
    $ PATH=~/bin:$PATH

Then download the repo client:

    $ curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
    $ chmod a+x ~/bin/repo

Great, you've got Repo!

## Sync the code

If you don't already have a workspace ready, create and enter a workspace directory where you'll store the project code:

    $ mkdir $WORKSPACE
    $ cd $WORKSPACE

...and sync the code into your workspace:

    $ repo init -u https://github.com/maruos/manifest -b maru-0.7
    $ repo sync

*Tip: `repo sync` can take a LONG time. Your first sync will download 50GB+ of sources!*

