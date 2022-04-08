# azure-traffic-manager-demo
Provides shell scripts that deploy Azure resources for Azure Traffic Manager demo.

## Cloning git repository
---
`$ git clone https://github.com/dr-choi-alex/azure-traffic-manager-demo.git`

## Deploying Azure resources
---

### Installing Azure CLI tool
Refer to [How to install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

### Logging in via Azure portal
`$ az login`

### Logging in with user account
`$ az login -u {USER-ACCOUNT} -p {USER-PASSWORD}`

### Running the shell script to deploy the resources
`$ ./azure-traffic-manager-resources/environment-create.sh`

## Installing the node modules & Building the app
---
```
$ cd cognex-speical-webpage-{REGION}
$ npm install
$ npm run build
```
