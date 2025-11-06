#!/bin/bash
echo "🚀 Building and deploying app..."
docker compose down
docker compose build
docker compose up -d
echo "✅ Deployment successful!"
