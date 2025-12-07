# Multi-stage build for Astro static site with Apache
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install pnpm and dependencies
RUN npm install

# Copy source code
COPY . .

# Build the Astro site
RUN npm run build

# Apache stage
FROM httpd:2.4-alpine

# Install necessary packages
RUN apk add --no-cache \
    bash \
    curl

# Copy the built site from builder stage
COPY --from=builder /app/dist /usr/local/apache2/htdocs/

# Copy custom Apache configuration
COPY apache.conf /usr/local/apache2/conf/httpd.conf

# Copy .htaccess file for additional redirects
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

# Create a volume for the dist folder
VOLUME ["/usr/local/apache2/htdocs"]

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["httpd-foreground"]