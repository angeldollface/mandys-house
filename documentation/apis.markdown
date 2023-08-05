---
layout: "layouts/page.liquid"
title: "Mandy's API"
description: "Functions and APIs that the Mandy Cargo workspace has."
---

## Mandy's APIs and functions

Mandy, as a Rust project, is split into what is called a "Cargo Workspace". These Workspaces are a group of "Cargo crates", i.e. packages for the Rust programming language that all have a similar or shared task. Since Mandy's codebase was getting quite large and I lost the overview, I split Mandy's code into these Cargo Workspaces. 

Mandy's Workspace has two big parts. The first is the crate for the binary containing Mandy's CLI and calling relevant crates for executing Mandy's tasks and the second is the "components" folder, that contains all crates that the binary crate relies on to make Mandy work. Each crate inside the "components" folder is named according to what it does and which part it plays in Mandy's larger architecture. If you'd like to access any of the APIs withing this workspace, you can do so by calling any crate in your `Cargo.toml' like this:

```TOML
crate_name = { git = "https://github.com/angeldollface/mandy", tag = "0.3.3", path = "components/crate_name" }
```

You can then import any of the crate's APIs in your Rust code like this:

```Rust
use crate_name::some_API_entity;
```

If you'd like to read the source code, you can do so by simply diving into any of Mandy's crates and reading the Rust code and any comments that may exist the component you are reading.