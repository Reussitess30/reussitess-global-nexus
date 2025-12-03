#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then echo "Error: not a git repository. Run this inside the repo."; exit 1; fi
if [ -z "$(git config user.name)" ]; then git config user.name "restore-bot"; fi
if [ -z "$(git config user.email)" ]; then git config user.email "restore-bot@example.com"; fi
BRANCH="restore/remove-assistant-button-$(date -u +%Y%m%d%H%M%S)"
echo "Creating and switching to branch: $BRANCH"
git checkout -b "$BRANCH"
FILES_TO_STAGE=("pages/index.js" "public/index.html" "public/reussitess971_v2/index.html")
for f in "${FILES_TO_STAGE[@]}"; do [ -f "$f" ] && git add "$f" && echo "Staged: $f" || echo "Not present (skipped): $f"; done
git add -A || true
if [ -z "$(git status --porcelain)" ]; then echo "No changes to commit. Exiting."; exit 0; fi
COMMIT_MSG="Restore homepage and remove assistant-injected button/patches

- Restored pages/index.js (homepage)
- Removed assistant-injected scripts and patches from public
- Cleaned injected <script> tags in index.html files
"
git commit -m "$COMMIT_MSG"
echo "Committed changes on branch $BRANCH"
if git remote | grep -q '^origin$'; then git push -u origin "$BRANCH" && echo "Pushed. You can now open a PR from branch: $BRANCH"; else echo "No remote 'origin' configured. Add remote and push: git remote add origin <git-url> && git push -u origin $BRANCH"; fi
echo "Done."
