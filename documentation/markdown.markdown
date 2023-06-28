---
layout: "layouts/page.liquid"
title: "How to use Markdown"
description: "Using Markdown in your Mandy-powered site."
---

## USING MARKDOWN FOR CONTENT

To make and edit content, Mandy uses Markdown. Markdown is a simple text format with some important info at the top of the file, called "front matter". Mandy detects all Markdown files in a directory and builds a page from each Markdown file.

Mandy will look for the layout file you provide in a Markdown file's front matter through the `layout` flag in the project root, render your content to HTML and insert this content into the Liquid template. Page variables saved in the front matter are called via the `{{ page.some_front_matter_var }}` expression in Liquid templates. Markdown files you want built, MUST have front matter and MUST end in `.markdown`. That's it.

## USING MARKDOWN FOR LOOPING OVER IN LIQUID TEMPLATES

If you have a directory with Markdown files you would like to loop over in a Liquid template, this is very simple also. First, you must set the `hasLoopContent` flag in `config.json` to `"true"`. Second, you must specify in which directory Mandy should look inside for your iterative content. This is done via the `loopContentDirs` flag in your `config.json` file. The directories to loop over are specified in this format. `"posts|some_dir|some_other_dir"`. You can then loop over this content in a layout like this:

```Liquid
{% for post in loop_content["posts"] %}
 <!--
  Your HTML code for rendering this content goes here.
  You can call item variables like this: post.title, post.date, etc.
 -->
{% endfor %}
```

In this example we loop over all Markdown files in the `posts` directory and render variables like `title`, `date` etc. These variables have to be set in the Markdown file's front matter.