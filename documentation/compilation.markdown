---
layout: "layouts/page.liquid"
title: "Compiling"
description: "Compiling a Mandy-powered site."
---

## ENVIRONMENT VARIABLES

Mandy does her best to keep things simple for end-users. For this reason, Mandy relies on an environment variable called `MANDY_ENV`. She needs this environment variable to determine which `baseurl` to use for different assets in your site. If, for example, you're hosting your Mandy site on GitHub in a repository called `yourusername/your-site`, the `baseurl` of `your-site` will not be `/` but `/your-site/`. However, because you shouldn't have to change which `baseurl` to use each time you add something new, Mandy uses the `dev_url` flag from `config.json` each time you develop locally and the `prod_url` flag each time you deploy your project. Which one is used when is determined by the setting of `MANDY_ENV`. This environment variable can either be set to `production` or `development`.

## GENERATE A STATIC WEBSITE

To compile your Mandy site, simply run the command from the command line:

```bash
mandy -c path_to_your_mandy_site
# OR
mandy --comps path_to_your_mandy_site
# OR
mandy comps path_to_your_mandy_site
```

This will generate a folder called `dist` in the directory where your Mandy-powered site is saved. `dist` will contain your generated static website.

## TEST A SITE LOCALLY

Mandy allows to spin uo a local development server to test your Mandy site on your machine. Run the following commands in sequence to do so:

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

## DEPLOYMENT

Mandy has her own GitHub Action. GitHub Actions is a service by GitHub that enables you to test and/or deploy the code you have pushed to a GitHub repository.
Setting up an action for Mandy to build and deploy your website is quite simple. For this, I'm assuming you have set up a Git repo in your Mandy-powered site and have created a repository for this site on the GitHub site itself. To use the GitHub Action, go to your repository's settings, then go to "Actions" > "General", and enable "Read and write permissions" under the "Workflow permissions" setting. Save this.

In your project folder, create a file called `.github`. Inside this folder, create another folder called `workflows`. Inside `workflows`, create a file called `main.yml`. Put the following into `main.yml` and save the file:

```YML
on: [push]
env:
  MANDY_ENV: production
name: Mandy CI
jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: angeldollface/mandy-github-action@v.0.1
      - name: "Build the Mandy site"
        run: mandy -c .
      - name: "Deploy"
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          branch: gh-pages
          folder: dist
```

After this is done, push your changes to GitHub. Wait for the build to complete. When the build is completed, go to your repository's settings again. Once there, go to "Pages". Change the branch from which your built Mandy the should be deployed to `gh-pages`. Save this setting. Once that is done, you should be able to access your Mandy site from `https://yourusername.github.io/repo-name`.

## LINKS

- The link to the Mandy GitHub Action on GitHub Marketplace: [VIEW](https://github.com/marketplace/actions/mandy-site-build)
- The link to the Mandy GitHub Action repository: [VIEW](https://github.com/angeldollface/mandy-github-action)