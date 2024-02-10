---
layout: "layouts/page.liquid"
title: "Using data files"
date: "2024/02/10"
description: "Using and rendering data in Mandy-powered sites."
---

## SETTING SITE DATA

Since any site needs data that describes navigation items, social media links or other things, setting this up in a Mandy-powered site is quite simple. Create a directory in the project root called `data`. In this directory you can store JSON files that contain data. If, for example, you wanted to save some navigation links in this file, you could create a file called `nav.json` and put this in it:

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
{% for item in data["nav"] %}
 <li class="navigation">
  <a class="navigation" href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a>
 </li>
{% endfor %}
```

Note the use of the `["nav"]` key. This key coincides with the name of the JSON data file. Support for other data storage formats is planned.