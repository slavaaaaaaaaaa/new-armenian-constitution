# Armenia's draft constitution: what changes

A plain-language English/Russian/Armenian guide to the draft constitution of Armenia
published on 23 Nov 2026. Each point links to the exact article on
[yourconstitution.am](https://yourconstitution.am/hy/constitution/proposed/article/1).

Live site: https://slava.lol/new-armenian-constitution/

## Editing content

All content lives in `_data/`:

- `sections.yml`: the provisions, grouped by section. Each item has a `tag`
  (`new`, `chg`, `rem`, `kept`), optional `hot: true` for contested
  points, `en`/`ru`/`hy` text, an optional Armenian `quote`, and `refs`.
- `ui.yml`: interface strings for each language.
- `status.yml`: the "Where it stands" panel: `steps`, `seats` and `notes`. A step can list source `links`; in `seats`, `%n` in `missing` stands for the number of missing seats.

A ref is one of:

| Fields                     | Links to                               |
| -------------------------- | -------------------------------------- |
| `a`, optional `p`, `pt`    | draft article `a`, part `p`, point `pt` |
| `cur`, optional `p` or `ps`| current constitution article `cur`; `ps` is a range of parts (`3–4`) |
| `pre: true`                | draft preamble                         |
| `curpre: true`             | current constitution preamble          |
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

`.github/workflows/jekyll.yml` builds and deploys the site on every push to
`main`. The repository's Pages source must be set to **GitHub Actions**.
