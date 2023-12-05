[nice-node](../README.md) / [Modules](../modules.md) / node

# Module: node

## Table of contents

### Enumerations

- [NodeStatus](../enums/node.NodeStatus.md)
- [NodeStoppedBy](../enums/node.NodeStoppedBy.md)

### Type Aliases

- [MetricData](node.md#metricdata)
- [MetricMap](node.md#metricmap)
- [NodeConfig](node.md#nodeconfig)
- [NodeId](node.md#nodeid)
- [NodePackage](node.md#nodepackage)
- [NodePackageMap](node.md#nodepackagemap)
- [NodeRuntime](node.md#noderuntime)
- [NodeService](node.md#nodeservice)
- [UserNodePackages](node.md#usernodepackages)
- [UserNodes](node.md#usernodes)
- [default](node.md#default)

### Functions

- [createNode](node.md#createnode)
- [createNodePackage](node.md#createnodepackage)
- [isBinaryNode](node.md#isbinarynode)
- [isDockerNode](node.md#isdockernode)

## Type Aliases

### MetricData

Ƭ **MetricData**: `Object`

#### Type declaration

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Defined in

[node.ts:44](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L44)

---

### MetricMap

Ƭ **MetricMap**: `Record`\<`string`, [`MetricData`](node.md#metricdata)\>

#### Defined in

[node.ts:48](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L48)

---

### NodeConfig

Ƭ **NodeConfig**: `Object`

#### Type declaration

| Name              | Type                                               |
| :---------------- | :------------------------------------------------- |
| `configValuesMap` | [`ConfigValuesMap`](nodeConfig.md#configvaluesmap) |
| `executionType?`  | [`ExecutionTypes`](nodeSpec.md#executiontypes)     |

#### Defined in

[node.ts:39](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L39)

---

### NodeId

Ƭ **NodeId**: `string`

#### Defined in

[node.ts:10](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L10)

---

### NodePackage

Ƭ **NodePackage**: `Object`

#### Type declaration

| Name           | Type                                                               |
| :------------- | :----------------------------------------------------------------- |
| `config`       | [`NodeConfig`](node.md#nodeconfig)                                 |
| `id`           | [`NodeId`](node.md#nodeid)                                         |
| `lastStarted?` | `string`                                                           |
| `lastStopped?` | `string`                                                           |
| `nodes`        | [`default`](node.md#default)[]                                     |
| `runtime`      | [`NodeRuntime`](node.md#noderuntime)                               |
| `services`     | [`NodeService`](node.md#nodeservice)[]                             |
| `spec`         | [`NodePackageSpecification`](nodeSpec.md#nodepackagespecification) |
| `status`       | [`NodeStatus`](../enums/node.NodeStatus.md)                        |
| `stoppedBy?`   | [`NodeStoppedBy`](../enums/node.NodeStoppedBy.md)                  |

#### Defined in

[node.ts:86](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L86)

---

### NodePackageMap

Ƭ **NodePackageMap**: `Record`\<`string`, [`NodePackage`](node.md#nodepackage)\>

#### Defined in

[node.ts:98](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L98)

---

### NodeRuntime

Ƭ **NodeRuntime**: `Object`

#### Type declaration

| Name                | Type                                                                                                                                                                                                        |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `build?`            | `string`                                                                                                                                                                                                    |
| `dataDir`           | `string`                                                                                                                                                                                                    |
| `initialized?`      | `boolean`                                                                                                                                                                                                   |
| `processIds?`       | `string`[]                                                                                                                                                                                                  |
| `usage`             | \{ `cpuPercent`: [`MetricData`](node.md#metricdata)[] \| [] ; `diskGBs`: [`MetricData`](node.md#metricdata)[] \| [] ; `memoryBytes`: [`MetricData`](node.md#metricdata)[] \| [] ; `syncedBlock`: `number` } |
| `usage.cpuPercent`  | [`MetricData`](node.md#metricdata)[] \| []                                                                                                                                                                  |
| `usage.diskGBs`     | [`MetricData`](node.md#metricdata)[] \| []                                                                                                                                                                  |
| `usage.memoryBytes` | [`MetricData`](node.md#metricdata)[] \| []                                                                                                                                                                  |
| `usage.syncedBlock` | `number`                                                                                                                                                                                                    |

#### Defined in

[node.ts:52](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L52)

---

### NodeService

Ƭ **NodeService**: `Object`

#### Type declaration

| Name          | Type                         |
| :------------ | :--------------------------- |
| `node`        | [`default`](node.md#default) |
| `serviceId`   | `string`                     |
| `serviceName` | `string`                     |

#### Defined in

[node.ts:81](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L81)

---

### UserNodePackages

Ƭ **UserNodePackages**: `Object`

#### Type declaration

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `nodeIds` | `string`[]                                 |
| `nodes`   | [`NodePackageMap`](node.md#nodepackagemap) |

#### Defined in

[node.ts:100](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L100)

---

### UserNodes

Ƭ **UserNodes**: `Object`

#### Type declaration

| Name      | Type       |
| :-------- | :--------- |
| `nodeIds` | `string`[] |
| `nodes`   | `NodeMap`  |

#### Defined in

[node.ts:77](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L77)

---

### default

Ƭ **default**: `Object`

#### Type declaration

| Name           | Type                                                 |
| :------------- | :--------------------------------------------------- |
| `config`       | [`NodeConfig`](node.md#nodeconfig)                   |
| `id`           | [`NodeId`](node.md#nodeid)                           |
| `lastStarted?` | `string`                                             |
| `lastStopped?` | `string`                                             |
| `runtime`      | [`NodeRuntime`](node.md#noderuntime)                 |
| `spec`         | [`NodeSpecification`](nodeSpec.md#nodespecification) |
| `status`       | [`NodeStatus`](../enums/node.NodeStatus.md)          |
| `stoppedBy?`   | [`NodeStoppedBy`](../enums/node.NodeStoppedBy.md)    |

#### Defined in

[node.ts:66](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L66)

## Functions

### createNode

▸ **createNode**(`input`): [`default`](node.md#default)

#### Parameters

| Name                           | Type                                                 |
| :----------------------------- | :--------------------------------------------------- |
| `input`                        | `Object`                                             |
| `input.initialConfigFromUser?` | [`ConfigValuesMap`](nodeConfig.md#configvaluesmap)   |
| `input.runtime`                | [`NodeRuntime`](node.md#noderuntime)                 |
| `input.spec`                   | [`NodeSpecification`](nodeSpec.md#nodespecification) |

#### Returns

[`default`](node.md#default)

#### Defined in

[node.ts:125](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L125)

---

### createNodePackage

▸ **createNodePackage**(`input`): [`NodePackage`](node.md#nodepackage)

#### Parameters

| Name                           | Type                                                               |
| :----------------------------- | :----------------------------------------------------------------- |
| `input`                        | `Object`                                                           |
| `input.initialConfigFromUser?` | [`ConfigValuesMap`](nodeConfig.md#configvaluesmap)                 |
| `input.runtime`                | [`NodeRuntime`](node.md#noderuntime)                               |
| `input.spec`                   | [`NodePackageSpecification`](nodeSpec.md#nodepackagespecification) |

#### Returns

[`NodePackage`](node.md#nodepackage)

#### Defined in

[node.ts:158](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L158)

---

### isBinaryNode

▸ **isBinaryNode**(`node`): `boolean`

#### Parameters

| Name   | Type                         |
| :----- | :--------------------------- |
| `node` | [`default`](node.md#default) |

#### Returns

`boolean`

#### Defined in

[node.ts:115](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L115)

---

### isDockerNode

▸ **isDockerNode**(`node`): `boolean`

#### Parameters

| Name   | Type                         |
| :----- | :--------------------------- |
| `node` | [`default`](node.md#default) |

#### Returns

`boolean`

#### Defined in

[node.ts:105](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/node.ts#L105)
