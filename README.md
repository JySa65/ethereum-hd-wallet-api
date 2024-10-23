# Ethereum HD Wallet API

## Rest API that manages an Ethereum Herarchical Deterministic Wallet built with TypeScript and ExpressJS.

### Features:
* Generate addresses from an existing Mnemonic Phrases
* Store generated addresses in a Mongo Collection
* Monitor incomming ERC-20 token transfers for stored addresses

### Setup project

Fill the environment variables file

```sh
cp env.example .env

```

Build and run docker containers: MongoDB, ExpressJS API and Mongo Express (Admin)
```sh
docker compose up --build
```




