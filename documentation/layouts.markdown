---
layout: "layouts/page.liquid"
title: "Using Liquid Layouts"
description: "Making layouts for a Mandy-powered site."
---

## USING LIQUID LAYOUTS

Mandy uses Liquid as the templating language for making and rendering layouts for content in a Mandy-powered site.

In Liquid you output content using two curly braces e.g. `{{ variable }}` and perform logic statements by surrounding them in a curly brace percentage sign e.g. `{% if statement %}`. To learn more about Liquid, check out the official [Liquid Documentation](https://shopify.github.io/liquid/). Any other text in a Liquid template is HTML.

## USING PARTIALS

Mandy now allows you to use partials with your Mandy projects. However, her way of loading and finding these partial Liquid templates is a little different. While you might do something like `{% include 'some_partial.liquid' %}` in other static-site generators, Mandy expects you to keep your partials in the `partials` directory of your site's project root. She also expects you to call them likes this: `{% include 'some_partial' %}` in Liquid layouts. If you fail to do either of these things, she will tell you where you went wrong.
