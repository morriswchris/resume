# Resume
> Build your resume using GitHub Flavoured markdown.

[![Build Status](https://travis-ci.org/morriswchris/resume.svg?branch=add_readme)](https://travis-ci.org/morriswchris/resume)
[![NPM Version](https://img.shields.io/npm/v/npm.svg)](https://img.shields.io/npm/v/npm.svg)


## Overview

Easily build your resume from a markdown file using `gulp` and `marked`.

**Bonus**: Auto-deploy to a `gh-pages` branch through Travis-CI. 


## Install/Usage

1. Simply clone this repo. `git clone git@github.com:morriswchris/resume <name-of-project>`
2. `cd <name-of-project>`
3. `npm install`
4. Write your resume in markdown by opening `resume.md` in your favourite text editor
5. Run `gulp build` and have your resume generated into `dist/index.html`, along with `github-markdown-css` copied to `dist/css`

## Setup Auto Deploy of gh-pages

In order to setup the `gh-pages` deploy through Travic-CI, you must enable your GitHub repository for Travis-CI here: [Travis-CI](https://travis-ci.org/). Once enabled, you need to setup a GitHub authorization token in order to commit to the `gh-pages` branch. 

1. Select `Settings` for your repository on Travis-CI
2. Under `Environment Variables` add `GH_TOKEN`. This is the GitHub Access Token, created [here](https://github.com/blog/1509-personal-api-tokens)
3. Add `GH_REF` as a seconadry variable with the url to your repository(`github.com/<user_name>/<repo_name>`). These two environment variables will create the string `http://GH_TOKEN@GH_REF`, and set it as your remote url when commiting your changes.

