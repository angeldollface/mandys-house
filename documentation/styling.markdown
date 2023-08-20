---
layout: "layouts/page.liquid"
title: "Giving your websites some style"
description: "Styling your Mandy-powered sites."
---

## STYLING YOUR MANDY-POWERED SITES

Mandy uses Sass (Syntactically-Awesome Stylesheets) as the language for making stylesheets to style your site with.

In terms of syntax and general usage of Sass itself, I recommend you read the [SASS Documentation](https://sass-lang.com/documentation/).

## FILE STRUCTURE

Mandy expects you to organize your Sass files in a very specific way. She expects you to have a single directory at the project root called `sass` with all your SASS files inside this directory.These files have to end in `.scss`. Mandy will look inside this directory and any sub-directory but not any deeper than that. She will then compile all your Sass files into a single file, called `index.css` in compressed form. This file will be placed in `dist/css` when you compile your static site.