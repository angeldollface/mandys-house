---
layout: "layouts/page.liquid"
title: "Installing Mandy"
description: "Using and rendering data in Mandy-powered sites."
---

## GIVING MANDY DATA TO FEED ON

Since any site needs data that describes navigation items, social media links or other things, setting this up in a Mandy-powered site is quite simple. Simply create a directory in the project root called `data`. In this directory you can store JSON files that contain data. If, for example, you wanted to save some navigation links in this file, you could create a file called `nav.json` and put this in it:

```JSON
[
    {
        "name": "Home",
        "url": ""
    },
    {
        "name": "About",
        "url": "content/about"
    },
    {
        "name": "Blog",
        "url": "content/blog"
    }
]
```

This file describes a bunch of navigation links that will appear on your site if they are called in a Liquid template. 

## DATA IN LIQUID TEMPLATES

You would call them in a Liquid template like this:

```Liquid
{% for item in data["data"]["nav"] %}
 <li class="navigation">
  <a class="navigation" href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a>
 </li>
{% endfor %}
```

Note the use of the `["nav"]` option.