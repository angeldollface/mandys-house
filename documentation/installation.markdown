---
layout: "layouts/page.liquid"
title: "Installing Mandy"
date: "2024/02/10"
description: "Installing Mandy on your machine or server."
---

## INSTALLING MANDY

## INSTALL MANDY DIRECTLY (FOR 64-BIT SYSTEMS)

Mandy offers binaries for the following systems on a 64-bit architecture: Linux with GLibC, Windows, and Mac OSX. These binaries can be found [here](https://github.com/angeldollface/mandy/releases). Download the binary for your platform and move this to a location on your hard drive that is on your system's `$PATH`.

### INSTALL MANDY VIA A SCRIPT (FOR NON-64-BIT SYSTEMS)

Run one of the commands below for your platform to download a script that will install Mandy.

- Run this command in a Powershell session with administrator privileges if you are running on a Windows 32-bit system:

```Powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://angeldollface.art/mandys-house/installers/win_32.ps1'))
```

- Run this command in a Powershell session with administrator privileges if you are running on a Windows 64-bit system:

```Powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://angeldollface.art/mandys-house/installers/win_64.ps1'))
```

For non-Windows platforms, run this command. You may have to put `sudo` in front of this command:

```bash
curl -s https://angeldollface.art/mandys-house/installers/nix.sh | bash -s
```

## UPDATING MANDY

If you want to update Mandy, run the command for your platform again or download the latest binary from Mandy's releases page on GitHub.

## UNINSTALLING MANDY

If you installed Mandy from a script, run `cargo uninstall mandy`  and `rustup self uninstall` from a terminal session to remove Mandy's binary from your system.

## TROUBLESHOOTING

If you encounter any problems, please file an issue [here](https://github.com/angeldollface/mandy/issues).