---
layout: "layouts/page.liquid"
title: "Installing Mandy"
description: "Installing Mandy on your machine or server."
---

## INSTALLING MANDY

Installing Mandy is simple! Run one of the commands below for your platform to download a script that will install Mandy.

- Run this command in a Powershell session with administrator privileges if you are running on a Windows 32-bit system:

```Powershell
. { iwr -useb https://angeldollface.art/mandys-house/installers/win_32.ps1 } | iex; ./win_32.ps1
```

- Run this command in a Powershell session with administrator privileges if you are running on a Windows 64-bit system:

```Powershell
. { iwr -useb https://angeldollface.art/mandys-house/installers/win_64.ps1 } | iex; ./win_64.ps1
```

For non-Windows platforms, run this command. You may have to put `sudo` in front of this command:

```bash
curl -s https://angeldollface.art/mandys-house/installers/nix.sh | bash -s
```

## UPDATING MANDY

If you want to update Mandy, simply run the command for your platform again.

## UNINSTALLING MANDY

To uninstall Mandy, simply run `cargo uninstall mandy`  and `rustup self uninstall` from a terminal session.
