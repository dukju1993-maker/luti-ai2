#!/bin/bash

# Get the current timestamp for the commit message
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

echo "Starting deployment..."

# Stage all changes
git add .

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
    echo "No changes to deploy."
else
    # Commit changes
    git commit -m "auto: deployment update at $TIMESTAMP"
    
    # Push to origin main
    echo "Pushing to remote repository..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "Deployment successful!"
    else
        echo "Deployment failed."
        exit 1
    fi
fi
