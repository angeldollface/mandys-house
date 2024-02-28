---
layout: "layouts/page.liquid"
title: "Release Notes"
date: "2024/02/10"
description: "Changelog info for Mandy versions."
---

## COMPLETED RELEASES

### [LATEST] Version 0.3.4

- Add support for YAML.
- Add support for TOML.
- Add build logs with timestamps.
- Significantly sped up Mandy's GitHub Action.
- Add the automatic generation of an RSS feed for iterative content.
- Add the automatic generation of a JSON API for iterative content.
- Add support for categories of content in iterative content.

### Version 0.3.3

- Fixed a bug with routing between pages.
- Security updates.
- Updated dependencies.
- Added a template site that helps building a portfolio website.

### Version 0.3.2

- Fixed the bug with Mandy's inbuilt server.
- Added a template site for Deno Deploy.
- Added a template site for Netlify.

### Version 0.3.1

- Fixed the Deno Deploy bug.
- Fixed broken documentation links in source files.

### Version 0.3.0

- Optimized the binary size.
- Binaries for 64-bit systems.
- Cleaned code for problem areas.
- Improved security of dependencies.
- Performance and speed improvements.
- Dramatically improved code quality.
- Restructured the project into a workspace.

### Version 0.2.0

- Added deployment support for Netlify.
- Added deployment support for Deno Deploy.
- Added automatic generation of `robots.txt`.
- Added a link to this page in Mandy's `README`.
- Added automatic generation of `sitemap.xml`.
- Added automatic generation of a build metadata file.
- Added support for using `include x.liquid` in templates.
- Dramatically improved Mandy's error-handling capabilities.
- Added two new configuration flags: `tlDomain` and `updateFreq`.
- Fixed the way site developers loop through site data in templates.
- Updated Mandy's GitHub Action versions to coincide with Mandy's versions.

### Version 0.1.0

- Initial release.
- Upload to GitHub.
- Finalizing of many features.

## FUTURE RELEASES

### Version 0.3.5

- Overhaul website.
- Add Clippy linting.
- Write extensive documentation.
- Add masking module for masking secrets.
- Add unit tests in sub-crates where practical.
- General housekeeping: Update dependencies & try to get binary size down.
