---
layout: "layouts/page.liquid"
title: "Scaffolding a site"
description: "Scaffolding a new Mandy-powered site."
---

## SCAFFOLDING A NEW MANDY-POWERED SITE

Since Mandy's core philosophy is to make life simple, and I didn't want anyone to manually create files and do all *that* tedious work, Mandy has a trick up her over-size sleeves.

In some programming languages, you can pull in third-party libraries from GitHub. Mandy takes a similar approach. Instead of using some central service for storing themes and sites other people have made, Mandy allows you to scaffold a new Mandy site directly from GitHub. Here's a small example:

```bash
mandy -i mysite -w angeldollface/mandy-template-site
# OR
mandy --init mysite --wtmpl angeldollface/mandy-template-site
# OR
mandy init mysite wtmpl angeldollface/mandy-template-site
```

In this example we scaffold a new site using the default theme I have made from the repository `angeldollface/mandy-template-site`. We scaffold this new site in the directory `mysite`. Pretty, rad, huh?