# Ethereum HD Wallet API

## Rest API that manages an Ethereum Herarchical Deterministic Wallet built with TypeScript and ExpressJS.

### Features:
* Generate addresses from an existing BIP39 12-Word Mnemonic Phrase
* Store generated addresses in a Mongo Collection
* Monitor incomming ERC20 token transfers for stored addresses
* Store detected ERC20 transfers in a MongoDB Collection
* TODO: Notify transfers via webhook

### Setup project

Fill the environment variables file

```sh
cp env.example .env

```
* For testing purposes you can use: https://iancoleman.io/bip39/ for obtaining a BIP39 12-Word Mnemonic Phrase
* You will need to create an [Infura](https://www.infura.io/) or [Alchemy](https://www.alchemy.com/) project for obtaining an API Key


### Run the project locally
Build and run docker containers: MongoDB, ExpressJS API and Mongo Express (Admin)
```sh
docker compose up --build
```




