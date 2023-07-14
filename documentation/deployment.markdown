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
      - uses: angeldollface/mandy-github-action@v.0.3.1
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

Deploying Mandy sites from Netlify is simple. Follow these steps to do so. i) First, go to [netlify.app](https://netlify.app) and make an account and a team. ii) Then, go to "Sites" and click "Import from Git". iii) Click on "Deploy from GitHub". iv) In the search field, search up your repo and click on it. v) Select the "gh-pages" branch as the branch to deploy your site from. vi) Click on "Deploy your_repo", where "your_repo" is the name of your repository. vii) Enjoy.

The repository [angeldollface/mandy-netlify](https://github.com/angeldollface/mandy-netlify) is an example template site for deploying your Mandy site to Netlify. Take note of the URL configurations of `prod_url`and `dev_url`. The example repository is deployed [here](https://relaxed-meerkat-4e759d.netlify.app/).

## DEPLOYMENT ON DENO DEPLOY

Deploying Mandy sites on Deno Deploy is as easy as it is with Netlify with the added advantage that Mandy generates the neccessary server files for you in the final `dist` directory. Carry out these steps to deploy your site on Deno Deploy.

i) Go to [deno.land/deploy](https://deno.land/deploy). ii) Click on "Sign Up". iii) Click on the free tier and click "Get Started". iv) Click on "New  Project". v) Click on "Select a repository under "Deploy an existing GitHub repository". vi) Under "Select User or Organization", click your GitHub username. vii) Under "Select Repository", search up your repository and click on it. viii) Under the branch, click "gh-pages". ix) Then, click on "No build step". x) Under the "Entry point", leave that as "server.ts". xi) Click on "Create & Deploy". xii) Enjoy!

The repository [angeldollface/mandy-deno-deploy](https://github.com/angeldollface/mandy-deno-deploy) is an example template site for deploying your Mandy site to Deno Deploy. Take note of the URL configurations of `prod_url`and `dev_url`. The example repository is deployed [here](https://mandy-deno-deploy.deno.dev/).

## LINKS

- The link to the Mandy GitHub Action on GitHub Marketplace: [VIEW](https://github.com/marketplace/actions/mandy-site-build)
- The link to the Mandy GitHub Action repository: [VIEW](https://github.com/angeldollface/mandy-github-action)
