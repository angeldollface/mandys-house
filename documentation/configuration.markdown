---
layout: "layouts/page.liquid"
title: "Configuring a Mandy site"
description: "How to configure your Mandy site."
---

## CONFIGURING YOUR MANDY-POWERED SITE

Every Mandy site needs to tell Mandy some info about your project. This info is controlled from `config.json`. This file serves two purposes: Getting crucial info about your site and setting site-wide data variables. The flags that Mandy absolutely needs are:

- `dev_url`: What `baseurl` to use for local development.
- `prod_url`: What `baseurl` to use for a production environment.
- `copyAssets`: This can either be `"true"` or `"false"`. This tells Mandy whether you have static assets or not that need to copied at compile time or not.
- `assetsDir`: This setting is only needed if `copyAssets` is set to `"true"`. This flag specifies which directory with static assets to copy.
- `hasLoopContent`: This can either be `"true"` or `"false"`. This tells Mandy whether there are directories with content you would like to loop over in templates or not.
- `loopContentDirs`: This setting is only needed if `hasLoopContent` is set to `"true"`. you can specify the directories to register for looping over like this: `"posts|another_dir|yet_another_dir"`.

Any other flags are not neccessary but may be needed to render data in templates.
All flags set in `config.json` can be called with `{{ site.some_flag }}` in Liquid templates.