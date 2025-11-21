#!/bin/bash

# Configuration
REPO_URL="https://github.com/insighthunter/redesign-2025.git"
PROJECT_DIR="redesign-2025"
NODE_VERSION="18"  # Minimum required
USE_YARN=false  # Set to true to use yarn instead of npm

# Check prerequisites
if ! command -v node &> /dev/null; then
  echo "Node.js not found. Please install Node.js $NODE_VERSION or higher from https://nodejs.org."
  exit 1
fi

NODE_INSTALLED=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_INSTALLED" -lt "$NODE_VERSION" ]; then
  echo "Node.js version $NODE_INSTALLED is too old. Please upgrade to $NODE_VERSION or higher."
  exit 1
fi

if ! command -v git &> /dev/null; then
  echo "Git not found. Please install Git."
  exit 1
fi

# Clone repository if not exists
if [ ! -d "$PROJECT_DIR" ]; then
  git clone $REPO_URL $PROJECT_DIR
fi
cd $PROJECT_DIR

# Install dependencies
if [ "$USE_YARN" = true ]; then
  if ! command -v yarn &> /dev/null; then
    npm install -g yarn
  fi
  yarn install
else
  npm install
fi

# Prompt for environment variables (example; expand as needed)
echo "Enter NEXT_PUBLIC_VAPID_PUBLIC_KEY (or press Enter to skip):"
read VAPID_PUBLIC
if [ ! -z "$VAPID_PUBLIC" ]; then
  echo "NEXT_PUBLIC_VAPID_PUBLIC_KEY=$VAPID_PUBLIC" >> .env.local
fi

echo "Enter VAPID_PRIVATE_KEY (or press Enter to skip):"
read VAPID_PRIVATE
if [ ! -z "$VAPID_PRIVATE" ]; then
  echo "VAPID_PRIVATE_KEY=$VAPID_PRIVATE" >> .env.local
fi

echo "Enter VAPID_SUBJECT (e.g., mailto:admin@insighthunter.app):"
read VAPID_SUBJECT
if [ ! -z "$VAPID_SUBJECT" ]; then
  echo "VAPID_SUBJECT=$VAPID_SUBJECT" >> .env.local
fi

# Run development server
if [ "$USE_YARN" = true ]; then
  yarn dev
else
  npm run dev
fi

echo "Installation complete. App running at http://localhost:3000."