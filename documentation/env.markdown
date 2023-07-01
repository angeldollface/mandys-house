---
layout: "layouts/page.liquid"
title: "Environment variables"
description: "Setting different variables for different environments."
---

## ENVIRONMENT VARIABLES

Mandy does her best to keep things simple for end-users. For this reason, Mandy relies on an environment variable called `MANDY_ENV`. She needs this environment variable to determine which `baseurl` to use for different environments. If, for example, you're hosting your Mandy site on GitHub in a repository called `yourusername/your-site`, the `baseurl` of `your-site` will not be `/` but `/your-site/`. However, because you shouldn't have to change which `baseurl` to use each time you add something new, Mandy uses the `dev_url` flag from `config.json` each time you develop locally and the `prod_url` flag each time you deploy your project. Which one is used when is determined by the setting of the `MANDY_ENV` environment variable. This environment variable can either be set to `production` or `development`.