---
layout: "layouts/page.liquid"
title: "Configuring a Mandy site"
date: "2024/02/10"
description: "How to configure your Mandy site."
---

## CONFIGURING YOUR MANDY-POWERED SITE

Every Mandy site needs to tell Mandy some info about your project. This info is controlled from `config.json`. This file serves two purposes: Getting crucial info about your site and setting site-wide data variables. The flags that Mandy absolutely needs are:

- `dev_url`: What `baseurl` to use for local development.
- `prod_url`: What `baseurl` to use for a production environment.
- `tlDomain`: Which top-level domain is your site being served and deployed from?
- `updateFreq`: How often is your site being updated? Weekly? Monthly? If you're not sure, leave the default frequency in your site's `config.json`.
- `copyFiles`: This tells Mandy which files you would like to copy to your compiled site. The syntax is as follows: 
`true=>file1|file2|file3`. If, instead of `true`, you have `false`, no files will be copied over.
- `hasLoopContent`: This can either be `"true"` or `"false"`. This tells Mandy whether there are directories with content you would like to loop over in templates or not.
- `loopContentDirs`: This setting is only required if `hasLoopContent` is set to `"true"`. you can specify the directories to register for looping over like this: `"posts|another_dir"`.

Any other flags are not neccessary but may be needed to render data in templates.
All flags set in `config.json` with the exception of the previous four can be called with `{{ site.some_flag }}` in Liquid templates.
