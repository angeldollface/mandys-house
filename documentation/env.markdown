---
layout: "layouts/page.liquid"
title: "Environment variables"
date: "2024/02/10"
description: "Setting different variables for different environments."
---

## ENVIRONMENT VARIABLES

Mandy relies on an environment variable called `MANDY_ENV`. She needs this environment variable to determine which `baseurl` to use for different environments. If, for example, you're hosting your Mandy site on GitHub in a repository called `yourusername/your-site`, the `baseurl` of `your-site` will not be `/` but `/your-site`. However, because you shouldn't have to change which `baseurl` to use each time you add something new, Mandy uses the `dev_url` flag from `config.json` each time you develop locally and the `prod_url` flag each time you deploy your project. Which one is used when, is determined by the setting of the `MANDY_ENV` environment variable. This environment variable can either be set to `production` or `development`. The `production` setting is used when you are deploying your site on a server and the `development` setting is used for testing your site locally on your own machine.