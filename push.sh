#!/bin/bash

cd /home/josubuntu/projects/blog || exit

git add .
git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M')"
git push origin main
