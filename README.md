# web3_demo
A resource repository, containing examples and templates for the web3 API and Metamask plugin

## Prerequisites
You need to know how to use the command prompt and how to change your working directory and execute commands.
You can take a look at [this tutorial](https://www.youtube.com/watch?v=MBBWVgE0ewk).

## Setup

1. Install node.js
2. To install `truffle` (Solidity development framework), `web3` and `http-server` (allows you to host local HTML as a website), run:

You may need Admin priviledges. Try to open the command prompt as an administrator.

```bash
npm install -g truffle web3@0.20.4 http-server
```

3. Clone this GitHub repository

If you have git installed, run:
```
git clone https://github.com/Zvezdin/web3_demo
```

Or just download the repository as a zip and extract somewhere

4. Navigate to the repository and run:
```
npm install
```

This will install the node dependencies of the example project, which are a local install of `truffle` and `web3`.

## Running a local blockchain

You need to **navigate to the truffle folder** of the project and run:
```
truffle develop
```

If you get an error while doing that, try to run the same command from **git bash** - it should be installed automatically with [Git](https://git-scm.com/downloads).

## Connecting to the local Ethereum node via `Node.js`

Not to confuse `Node.js` with your Ethereum node, they have nothing in common.
Navigate to the project directory and run:
```
node
```

This will put you in an interactive `Node.js` session, where you can load the web3 API and connect to the Ethereum node.

## Running the MetaMask example

1. Navigate to the `metamask_example` folder in the project and run:
```node publish.js```

This will run a script that will publish a contract on your local blockchain and print out its address.

2. Edit the `script.js` file with the new contract address

3. To host the website, while inside the metamask_example folder, run:
```
http-server
```

`Ctrl + C` closes it.

4. Install MetaMask in chrome

5. Open MetaMask and click the "Import existing DEN"

6. Copy the 12 word key that was printed out when you started your local blockchain.

The 12 words are used to generate the Ethereum accounts that have Ether in your local blockchain. They should be:
```
candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
```

Because every truffle develop session uses the same account set.

7. After you log in to MetaMask with this key, click on the upper left corner and choose "Custom RPC"

8. Enter the URL `http://localhost:9545/` and click save. Go back and you should have successfully connected to your local node!

9. Visit `127.0.0.1:8080` and use the website!

## Developing DAPPs

You can edit the website files (html and js files) directly and they will be updated when you reload the page. **If you're using chrome, reload the page with Ctrl + Shift + R instead, because chrome will cache your last version and won't update it**.
