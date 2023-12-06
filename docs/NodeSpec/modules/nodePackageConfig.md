[Node Spec examples](../index.md) / [Modules](../modules.md) / nodePackageConfig

# Module: nodePackageConfig

## Table of contents

### Type Aliases

- [ServiceConfigs](nodePackageConfig.md#serviceconfigs)

## Type Aliases

### ServiceConfigs

Ƭ **ServiceConfigs**: `Object`

"serviceConfigs": {
   "services": [
     {
       "serviceId": "executionClient",
       "configValues": {
         "network": "Mainnet",
         "genesisFile": ""
       }
     },
     {
       "serviceId": "consensusClient",
       "configValues": {
         "network": "Mainnet"
       }
     }
   ]
 }

#### Type declaration

| Name | Type |
| :------ | :------ |
| `services` | \{ `configKey?`: [`ConfigKey`](nodeConfig.md#configkey) ; `configValues?`: [`ConfigValuesMap`](nodeConfig.md#configvaluesmap) ; `serviceId`: `string`  }[] |

#### Defined in

[nodePackageConfig.ts:22](https://github.com/NiceNode/nice-node/blob/96dd378b/src/common/nodePackageConfig.ts#L22)
