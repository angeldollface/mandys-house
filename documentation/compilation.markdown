---
layout: "layouts/page.liquid"
title: "Compiling"
description: "Compiling a Mandy-powered site."
---

## GENERATE A STATIC WEBSITE

To compile your Mandy site, run this command from the command line:

```bash
mandy -c path_to_your_mandy_site
# OR
mandy --comps path_to_your_mandy_site
# OR
mandy comps path_to_your_mandy_site
```

This will generate a folder called `dist` in the directory where your Mandy-powered site is saved. `dist` will contain your generated static website.

## TEST A SITE LOCALLY

Mandy allows you to spin uo a local development server to test your Mandy site on your machine. Run the following commands in sequence to do so:

```bash
# We must clean previous builds.
mandy -r your_mandy_site_dir
# OR
mandy --reset your_mandy_site_dir
# OR 
mandy reset your_mandy_site_dir

# Builds and serves your site.
mandy -s your_mandy_site_dir
# OR
mandy --srvs your_mandy_site_dir
# OR
mandy srvs your_mandy_site_dir
```