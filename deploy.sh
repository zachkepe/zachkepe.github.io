#!/bin/bash

# Description: Deploy the application to the server by building with `zola build`, copying the output to docs/, adding the CNAME file, and pushing to the master branch.

# Exit on error
set -e

# Build the site
zola build

# Remove old docs/ directory if it exists
rm -rf docs/

# Copy the output to docs/
cp -r public/* docs/

# Add the CNAME file
echo "www.zachkepe.com" > docs/CNAME

# Commit and push
git add docs/
git commit -m "Deploy to GitHub Pages"

# Push to the master branch
git push origin master

# Print success message
echo "Deployed to GitHub Pages"