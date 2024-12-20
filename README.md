# Sphero

**Live Site:**
[https://sphero.netlify.app](https://sphero.netlify.app)

## Description

Sphero is a Decentralized crowdfunding platform built on EVM allowing creators to raise funds for projects in a transparent and secure manner.

## Features

- Create and manage crowdfunding campaigns
- Contribute funds to campaigns
- Track contributions and amounts raised transparently on blockchain  
- Creators can withdraw funds only if campaign target is reached
- ONLY creators can claim funds.
- Creators can edit campaigns as well.
- Creators can delete campaign.

## How to run on local machine

- Clone the repo
- Install dependencies with `npm install`  
- Start local dev server with `npm run dev`
- Build and deploy to production with `npm run build` 

## Directory Structure

- `components/*` - React component files
- `abis/` - Contract ABIs
- `contexts/` - React context files
- `utils/` - Utility functions 
- `styles/` - Tailwind CSS classes
- `hardhat/*` - Hardhat config, tests, scripts

## Tech Stack

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Thirdweb](https://thirdweb.com/) - Web3 development SDK
- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [Solidity](https://docs.soliditylang.org/en/v0.8.17/) - Ethereum smart contract language
- [React Hot Toast](https://react-hot-toast.com/) - Notifications
