---
layout: "layouts/page.liquid"
title: "Installing Mandy"
description: "Installing Mandy on your machine or server."
---

## INSTALLING MANDY

Installing Mandy is really quite simple! Since she is still under active development and I haven't figured out how to package her for some of the most important platforms, you will have to install Mandy from GitHub. To do this you need to have the following things ready and available from the command line.

- [Rust](https://rust-lang.org): Mandy is written in Rust, so you will need the Rust compiler installed.
- [Git](https://git-scm.org): Since GitHub uses Git for version control, you will need that too.

Once those things have been installed, run these commands from the command line:

```bash
cargo --version # Checking whether Cargo is installed.
git --version # Checking whether Git is installed.
cargo install --git https://github.com/angeldollface/mandy # This will install Mandy directly from source.
```

## UPDATING

To update Mandy, simply run the last command from above again.

## PLANNED PLATFORMS

I will *try* to support these platforms in Mandy's first release:

### Mac OSX

- Mac OSX x86 64-bit
- Mac OSX x64 32-bit
- Mac OSX aarch64

### Windows

- Mac OSX x86 64-bit
- Mac OSX x64 32-bit

### Linux

I'm not entirely sure yet but I want to support the following platforms:

- Arch Linux
- Debian
- Fedora
- Alpine Linux
- FreeBSD
- OpenBSD
- Termux