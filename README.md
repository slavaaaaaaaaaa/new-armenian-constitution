# Armenia's draft constitution: what changes

A plain-language, English/Russian guide to the draft constitution of Armenia
published on 23 Nov 2026. Each point links to the exact article on
[yourconstitution.am](https://yourconstitution.am/hy/constitution/proposed/article/1).

Live site: https://slavaaaaaaaaaa.github.io/new-armenian-constitution/

## Editing content

All content lives in `_data/`:

- `sections.yml`: the provisions, grouped by section. Each item has a `tag`
  (`new`, `chg`, `rem`, `kept`, `none`), optional `hot: true` for contested
  points, `en`/`ru` text, an optional Armenian `quote`, and `refs`.
- `ui.yml`: interface strings for each language.
- `status.yml`: the "Where it stands" list.

A ref is one of:

| Fields                     | Links to                               |
| -------------------------- | -------------------------------------- |
| `a`, optional `p`, `pt`    | draft article `a`, part `p`, point `pt` |
| `cur`, optional `p`        | current constitution article `cur`     |
| `pre: true`                | draft preamble                         |
| `explainer: true`          | government explainer page              |
| `ctx: true`, `label`, `url`| any outside source                     |

Base URLs for the official site are in `_config.yml`.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/new-armenian-constitution/.

## Publishing

In the repository's GitHub settings, under **Pages**, set the source to
"Deploy from a branch", branch `main`, folder `/ (root)`.
