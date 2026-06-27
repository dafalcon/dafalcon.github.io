# dafalcon.github.io

Notes from setting up this site.

## Stack

- [MkDocs](https://www.mkdocs.org)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions](https://github.com/features/actions)

## Running it locally

Install [venv](https://docs.python.org/3/library/venv.html) and dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run a local server:

```bash
mkdocs serve
```

View it in the browser at [http://127.0.0.1:8000](http://127.0.0.1:8000)

## Deployment

Push `main` to trigger a GitHub Action that builds the site and deploys it to the `gh-pages` branch.
See .github/workflows/deploy.yml for details.

