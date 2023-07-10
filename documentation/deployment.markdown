---
layout: "layouts/page.liquid"
title: "Deploying your site"
description: "Deploying your Mandy site on GitHub Pages."
---

## DEPLOYMENT ON GITHUB PAGES

Mandy has her own GitHub Action. GitHub Actions is a service by GitHub that enables you to test and/or deploy the code you have pushed to a GitHub repository.
Setting up an action for Mandy to build and deploy your website is quite simple. For this, I'm assuming you have set up a Git repo in your Mandy-powered site and have created a repository for this site on the GitHub site itself. To use the GitHub Action, go to your repository's settings, then go to "Actions" > "General", and enable "Read and write permissions" under the "Workflow permissions" setting. Save this.

In your project folder, create a folder called `.github`. Inside this folder, create another folder called `workflows`. Inside `workflows`, create a file called `main.yml`. Put the following into `main.yml` and save the file:

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
      - uses: angeldollface/mandy-github-action@v.0.3.0
      - name: "Build the Mandy site"
        run: mandy -c .
      - name: "Deploy"
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          branch: gh-pages
          folder: dist
```

Optionally, you can also use the latest cutting-edge version of Mandy's source code by pasting this code into your `main.yml` file:

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
      - uses: angeldollface/mandy-github-action@dev
      - name: "Build the Mandy site"
        run: mandy -c .
      - name: "Deploy"
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          branch: gh-pages
          folder: dist
```

After this is done, push your changes to GitHub. Wait for the build to complete. When the build is completed, go to your repository's settings again. Once there, go to "Pages". Change the branch from which your built Mandy the should be deployed to `gh-pages`. Save this setting. Once that is done, you should be able to access your Mandy site from `https://yourusername.github.io/repo-name`.

## DEPLOYMENT ON NETLIFY

Deploying Mandy sites from Netlify is simple. Mandy allows you to deploy the static sites she generates, on Netlify. You need to have an active Netlify account. It is best you sign up with GitHub. To set this up, go to your Netlify dashboard and create a new site. On this dashboard there will be a menu or page under "Build and Deploy". Go to to this page. Link the repository that contains your Mandy project. Under "Branches to Deploy", type "gh-pages". Leave the "Build configuration" section clear. Please make sure your production "baseurl" is set to "/" or "". That's all there is to it.

## DEPLOYMENT ON DENO DEPLOY

Deploying Mandy sites on Deno Deploy is as easy as it is with Netlify with the added advantage that Mandy generates the neccessary server files for you in the final `dist` directory. Go to the "Deno Deploy" website and link the repository that holds your Mandy project. Choose the branch that holds the built project files. That's it! Please make sure your production "baseurl" is set to "/" or "". Done!

## LINKS

- The link to the Mandy GitHub Action on GitHub Marketplace: [VIEW](https://github.com/marketplace/actions/mandy-site-build)
- The link to the Mandy GitHub Action repository: [VIEW](https://github.com/angeldollface/mandy-github-action)
