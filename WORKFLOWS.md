# Workflow Documentation

## CI Pipeline
- **Purpose**: Runs linting, tests, and build automatically.
- **Triggers**: On push to `main`/`develop`, PRs to `main`.
- **Dependencies**: lint → test → build.
- **Secrets**: CODECOV_TOKEN.
- **Troubleshooting**: Check Actions logs.

## Security Audit
- **Purpose**: Daily npm audit.
- **Trigger**: Daily at 2 AM UTC.
- **Output**: Creates GitHub issue if vulnerabilities exist.

## Deployment
- **Purpose**: Deploy to GitHub Pages.
- **Trigger**: Push to `main`.
- **Secrets**: Uses default `GITHUB_TOKEN`.
- **Output**: Website published to gh-pages.

## Custom Action
- **Purpose**: Reuse Node setup & install.
- **Usage**: `uses: ./.github/actions/setup-node`
