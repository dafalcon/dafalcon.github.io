# dafalcon.github.io

Notes from setting up this site.

## Stack

- MkDocs
- Material for MkDocs
- GitHub Pages
- GitHub Actions

## Running it locally

Install venv and dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run a local server:

```bash
mkdocs serve
```

View it in the browser at http://127.0.0.1:8000

## Deployment

Push to `main` to trigger a GitHub Action that builds the site and deploys it to the `gh-pages` branch.
See .github/workflows/deploy.yml for details.

