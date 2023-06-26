---
layout: "layouts/page.liquid"
title: "Giving your websites some style"
description: "Styling your Mandy-powered sites."
---

## STYLING YOUR MANDY-POWERED SITES

Mandy uses SASS (Syntactically-Awesome Stylesheet) as the language for making stylesheets to style your site with.

In terms of syntax and general usage of SASS itself, I recommend you read the [SASS Documentation](https://sass-lang.com/documentation/).

## FILE STRUCTURE

Mandy expects you to organize your SASS files in a very specific way. She expects you to have a single directory at the project root called `sass` with all your SASS files inside this directory. Mandy will look inside this directory and any sub-directory but not any deeper than that. She will then compile all your SASS files into a single file, called `index.css` in compressed form. This file will be placed `dist/css`. That's all that is relevant.