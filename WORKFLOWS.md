# Workflow Documentation

This document explains the purpose, triggers, dependencies, and troubleshooting for all GitHub Actions workflows in this repository.

---

## 1. CI Pipeline (`.github/workflows/ci.yml`)

### Purpose
Ensures code quality and reliability by running linting, tests, and build automatically.

### Triggers
- On push to `main` or `develop`
- On pull requests targeting `main`

### Jobs
- **Linting**
  - Sets up Node.js
  - Installs dependencies
  - Runs ESLint
  - Runs Prettier check (optional)
- **Testing**
  - Runs Jest unit tests
  - Generates coverage report
  - Uploads coverage to Codecov
  - Fails if coverage < 80%
- **Build**
  - Builds application
  - Uploads build artifacts
  - Uses caching for faster runs

### Secrets Required
- `CODECOV_TOKEN` (for private repos, optional for public)

### Troubleshooting
- If lint fails, check `.eslintrc`/`eslint.config.mjs`.
- If coverage < 80%, add more tests in `tests/`.
- Ensure Node version in workflow matches local environment.

---

## 2. Security Audit (`.github/workflows/security-audit.yml`)

### Purpose
Runs daily dependency checks and creates issues if vulnerabilities are found.

### Triggers
- Scheduled daily (`cron`)
- Manual workflow dispatch

### Jobs
- **Audit**
  - Installs dependencies
  - Runs `npm audit --json`
  - Creates GitHub Issue if vulnerabilities are detected

### Secrets Required
- None

### Troubleshooting
- If workflow fails, ensure `package.json` and `package-lock.json` are up to date.
- Run `npm audit fix` locally to resolve issues.

---

## 3. Deployment (`.github/workflows/deploy.yml`)

### Purpose
Deploys project to GitHub Pages after successful builds.

### Triggers
- Push to `main`

### Jobs
- **Deploy**
  - Builds project
  - Deploys `dist/` folder to `gh-pages` branch
  - Publishes to GitHub Pages

### Secrets Required
- None (uses built-in `GITHUB_TOKEN`)

### Troubleshooting
- If deployment fails:
  - Check Pages settings (`Settings → Pages → Source`).
  - Verify `dist/` folder exists after build.
  - Make sure branch `gh-pages` is selected in settings.

---

## Job Dependencies

- **Linting → Testing → Build → Deploy**
- Deployment only runs if all previous jobs succeed.

---

## Status Badges

See `README.md` for live status badges of all workflows.

---


