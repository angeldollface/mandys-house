---
layout: "layouts/page.liquid"
date: "2024/02/10"
title: "Mandy's API"
description: "Functions and APIs that the Mandy Cargo workspace has."
---

## Mandy's APIs and functions

Mandy, as a Rust project, is split into what is called a "Cargo Workspace". These Workspaces are a group of "Cargo crates", i.e. packages for the Rust programming language that all have a similar or a shared task. Since Mandy's codebase was getting quite large and I lost the overview, I split Mandy's code into separate crates and grouped these crates into a Cargo Workspace. 

Mandy's workspace has two big parts. The first is the crate for the binary containing Mandy's CLI and calling relevant crates for executing Mandy's tasks and the second is the "components" folder. This folder contains all crates that the binary crate relies on to make Mandy work. Each crate inside the "components" folder is named according to what it does and which part it plays in Mandy's larger architecture. If you'd like to access any of the APIs within this workspace in a Rust project of your own, you can do so by calling any crate in your `Cargo.toml' like this:

```TOML
crate_name = { git = "https://github.com/angeldollface/mandy", tag = "0.3.4", path = "components/crate_name" }
```

You can then import any of the crate's APIs in your Rust code like this:

```Rust
use crate_name::some_API_entity;
```