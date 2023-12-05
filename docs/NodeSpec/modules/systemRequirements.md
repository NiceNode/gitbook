[nice-node](../README.md) / [Modules](../modules.md) / systemRequirements

# Module: systemRequirements

## Table of contents

### Type Aliases

- [CpuRequirements](systemRequirements.md#cpurequirements)
- [DockerRequirements](systemRequirements.md#dockerrequirements)
- [InternetRequirements](systemRequirements.md#internetrequirements)
- [MemoryRequirements](systemRequirements.md#memoryrequirements)
- [StorageRequirements](systemRequirements.md#storagerequirements)
- [SystemRequirements](systemRequirements.md#systemrequirements)

## Type Aliases

### CpuRequirements

Ƭ **CpuRequirements**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `cores?`       | `number` |
| `minSpeedGHz?` | `number` |

#### Defined in

[systemRequirements.ts:1](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/systemRequirements.ts#L1)

---

### DockerRequirements

Ƭ **DockerRequirements**: `Object`

#### Type declaration

| Name          | Type      |
| :------------ | :-------- |
| `minVersion?` | `string`  |
| `required?`   | `boolean` |

#### Defined in

[systemRequirements.ts:23](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/systemRequirements.ts#L23)

---

### InternetRequirements

Ƭ **InternetRequirements**: `Object`

#### Type declaration

| Name                    | Type      |
| :---------------------- | :-------- |
| `minDownloadSpeedMbps?` | `number`  |
| `minUploadSpeedMbps?`   | `number`  |
| `noDataCapRecommended?` | `boolean` |

#### Defined in

[systemRequirements.ts:15](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/systemRequirements.ts#L15)

---

### MemoryRequirements

Ƭ **MemoryRequirements**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `minSizeGBs?`  | `number` |
| `minSpeedGHz?` | `number` |

#### Defined in

[systemRequirements.ts:5](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/systemRequirements.ts#L5)

---

### StorageRequirements

Ƭ **StorageRequirements**: `Object`

#### Type declaration

| Name                 | Type      |
| :------------------- | :-------- |
| `minSizeGBs?`        | `number`  |
| `minWriteSpeedMBps?` | `number`  |
| `ssdRequired?`       | `boolean` |

#### Defined in

[systemRequirements.ts:9](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/systemRequirements.ts#L9)

---

### SystemRequirements

Ƭ **SystemRequirements**: `Object`

#### Type declaration

| Name                | Type                                                                 |
| :------------------ | :------------------------------------------------------------------- |
| `cpu?`              | [`CpuRequirements`](systemRequirements.md#cpurequirements)           |
| `description?`      | `string`                                                             |
| `docker?`           | [`DockerRequirements`](systemRequirements.md#dockerrequirements)     |
| `documentationUrl?` | `string`                                                             |
| `internet?`         | [`InternetRequirements`](systemRequirements.md#internetrequirements) |
| `memory?`           | [`MemoryRequirements`](systemRequirements.md#memoryrequirements)     |
| `storage?`          | [`StorageRequirements`](systemRequirements.md#storagerequirements)   |

#### Defined in

[systemRequirements.ts:28](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/systemRequirements.ts#L28)
