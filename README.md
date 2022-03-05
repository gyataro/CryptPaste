# CryptPaste
CryptPaste is a pastebin clone made with MongoDB, Express, Svelte, and Node.

## Features
Users can encrypt the pasted data with a single password, or a distributed secret share via Shamir’s Secret Sharing. The server will have no knowledge of the pasted data. Other features:
- Syntax highlighting
- Set an expiry time
- Toggle burn after reading
- Toggle visibility settings: public, unlisted, private

## Development
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites
Docker Desktop is required.

#### Installation
Rename environment variables.
```
.env.example => .env
```
Build, start, and attach containers.
```
docker-compose up
```

#### API Documentation


## Deployment
Coming soon.

