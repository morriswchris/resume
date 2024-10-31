# Resume
> Build your resume using GitHub Flavoured markdown.

[![NPM Version](https://img.shields.io/npm/v/npm.svg)](https://img.shields.io/npm/v/npm.svg)


## Overview

Easily build your resume from a markdown file using `gulp` and `marked`.

**Bonus**: Auto-deploy to a `gh-pages` branch through GitHub Actions. 


## Install/Usage

1. Simply clone this repo. `git clone git@github.com:morriswchris/resume <name-of-project>`
2. `cd <name-of-project>`
3. `npm install`
4. Write your resume in markdown by opening `resume.md` in your favourite text editor
5. Run `gulp build` and have your resume generated into `dist/index.html`, along with `github-markdown-css` copied to `dist/css`

## Setup Auto Deploy of gh-pages

In order to setup the `gh-pages` deploy through github actions, you'll need to setup a GitHub PAT token in order to commit to the `gh-pages` branch. The script looks for `GH_PAT` as the action secret.


