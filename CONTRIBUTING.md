# Contributing

Contributions to The Maru OS Project (MOSP) are very much welcome!

The contribution flow is pretty simple:

0. Announce your intended changes by filing an issue or chiming in on an existing issue
1. Make your changes using a style consistent with the rest of the project
2. Sign your work
3. Submit a pull request

## Announce your intended changes

For significant contributions like new features, it would be awesome if you
could file a new issue or chime in on an existing issue before starting your
changes. This can help avoid duplication of effort and allow you to seek out
early feedback from the rest of the community, perhaps even saving you from the
pain of making major corrections to your pull request down the road!

*Tip: You can safely ignore this for smaller changes like formatting, fixing
bugs, etc.*

## Use a consistent style

There are no hard rules here; just use similar project code for guidance. When
in doubt, feel free to ask for clarification on your associated issue.

## Sign your work

Before your changes can be accepted, you will need to explicitly confirm that
you have the right to submit your changes under MOSP's open source licenses.
MOSP takes the same approach as the Linux Kernel does--all you have to do is
sign the Developer Certificate of Origin, Version 1.1 (verbatim from
https://developercertificate.org):

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
660 York Street, Suite 102,
San Francisco, CA 94110 USA

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.


Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

The signature is in the form of a single line at the end of your commit's
description with your real name and email address:

    Signed-off-by: Itaru Hashida <daru@fgl.org>

You can easily sign your commits with the `-s` flag:

    $ git commit -s

## Submit a pull request

Try to use a meaningful branch name when submitting a pull request. If you have
an associated issue, you can prepend the issue number to your branch name, for
example `101-fix-foo`.

See the [GitHub docs](https://help.github.com/articles/using-pull-requests/) for
more info on submitting pull requests.
