#!/bin/bash

cd /home/josubuntu/projects/blog || exit

# Check for changes
if git diff --quiet && git diff --cached --quiet; then
  echo "🟡 No changes to commit."
  exit 0
fi

# Get list of modified Markdown files
changed_files=$(git status --short | grep 'src/content/blog/.*\.md' | awk '{print $2}' | xargs -n1 basename | paste -sd ", " -)

# Fallback if no markdown files changed
if [ -z "$changed_files" ]; then
  changed_files="general update"
fi

# Timestamp
timestamp=$(date '+%Y-%m-%d %H:%M')

# Auto message
msg="Auto-commit: $timestamp — $changed_files"

# Commit and push
git add .
git commit -m "$msg"
git push origin main

echo "✅ $msg"
