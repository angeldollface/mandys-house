---
layout: "layouts/page.liquid"
title: "Handling static assets"
description: "Handling static assets in your Mandy-powered site."
---

## HANDLING STATIC ASSETS

Mandy's approach to static assets is very simple. You specify which directory contains all your static assets, set the `copyAssets` flag in `config.json` to `"true"`. Specify a `assetsDir` flag also in `config.json` and Mandy will copy your directory over to the `dist` folder at compile time. That's it.