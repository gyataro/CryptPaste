# CryptPaste
> CryptPaste is a pastebin clone made with MongoDB, Express, Svelte, and Node.

Security: uploaded content can be optionally encrypted, the server will have no knowledge of the pasted data. Users can encrypt the pasted data with a single password, or a distributed secret share via Shamir’s Secret Sharing.

Privacy: users can set an expiry time, toggle visibility settings, and toggle burn after reading on the pastes.

## Development
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
[Node.js](https://nodejs.org/en/), any JS package manager ([npm](https://www.npmjs.com/)/[pnpm](https://pnpm.io/)/[yarn](https://yarnpkg.com/)), and [Docker](https://docs.docker.com/get-docker/) Desktop.

### Installing
Rename environment variables.
```
.env.example => .env
```
Build, start, and attach containers.
```
docker-compose up
```
## Deployment
Coming soon.

