#!/bin/bash

# Build and run the CID website in Docker
echo "🚀 Building and running CID website in Docker..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t cid-website --no-cache -f apache.dockerfile .
# docker build -t cid-website -f apache.dockerfile .

# Stop any existing container
echo "🛑 Stopping existing container..."
docker-compose down

# Start the container
echo "▶️  Starting container..."
docker-compose up -d

# Wait a moment for the container to start
sleep 3

# Check if the container is running
if docker-compose ps | grep -q "Up"; then
    echo "✅ Container is running!"
    echo "🌐 Website is available at: http://localhost:8080"
    echo "📁 Dist folder is mounted at: ./dist"
    echo ""
    echo "📋 Useful commands:"
    echo "  - View logs: docker-compose logs -f"
    echo "  - Stop container: docker-compose down"
    echo "  - Rebuild: docker-compose up --build"
else
    echo "❌ Container failed to start. Check logs with: docker-compose logs"
fi