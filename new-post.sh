#!/bin/bash

# Prompt for title
read -p "Enter post title: " title

# Generate slug and filename
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')
filename="/home/josubuntu/projects/blog/src/content/blog/$slug.md"

# Generate date
date=$(date +%F)

# Frontmatter
cat > "$filename" <<EOL
---
title: "$title"
description: ""
pubDate: "$date"
author: "Josue"
tags: []
---
Write your content here.
EOL

# Feedback and open in VS Code
echo "✅ Created: $filename"
code "$filename"
