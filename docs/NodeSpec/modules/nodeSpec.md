[Node Spec examples](../index.md) / [Modules](../modules.md) / nodeSpec

# Module: nodeSpec

## Table of contents

### Type Aliases

- [Architectures](nodeSpec.md#architectures)
- [BaseNodeExecution](nodeSpec.md#basenodeexecution)
- [BinaryDownload](nodeSpec.md#binarydownload)
- [BinaryExecution](nodeSpec.md#binaryexecution)
- [DockerExecution](nodeSpec.md#dockerexecution)
- [ExecutionTypes](nodeSpec.md#executiontypes)
- [NodeExecution](nodeSpec.md#nodeexecution)
- [NodePackageExecution](nodeSpec.md#nodepackageexecution)
- [NodePackageNodeServiceSpec](nodeSpec.md#nodepackagenodeservicespec)
- [NodePackageSpecification](nodeSpec.md#nodepackagespecification)
- [NodeSpecification](nodeSpec.md#nodespecification)

## Type Aliases

### Architectures

Ƭ **Architectures**: ``"amd64"`` \| ``"arm64"``

#### Defined in

[nodeSpec.ts:11](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L11)

___

### BaseNodeExecution

Ƭ **BaseNodeExecution**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `architectures?` | \{ `binary?`: [`Architectures`](nodeSpec.md#architectures)[] ; `docker?`: [`Architectures`](nodeSpec.md#architectures)[]  } |
| `architectures.binary?` | [`Architectures`](nodeSpec.md#architectures)[] |
| `architectures.docker?` | [`Architectures`](nodeSpec.md#architectures)[] |
| `dataPath?` | `string` |
| `defaultExecutionType?` | [`ExecutionTypes`](nodeSpec.md#executiontypes) |
| `dependencies?` | `any`[] |
| `executionTypes` | [`ExecutionTypes`](nodeSpec.md#executiontypes)[] |
| `input?` | \{ `default?`: `string`[] ; `defaultConfig?`: `Record`\<`string`, `any`\>  } |
| `input.default?` | `string`[] |
| `input.defaultConfig?` | `Record`\<`string`, `any`\> |
| `runInBackground?` | `boolean` |

#### Defined in

[nodeSpec.ts:19](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L19)

___

### BinaryDownload

Ƭ **BinaryDownload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `darwin?` | `ArchOptsMap` |
| `excludeNameWith?` | `string` |
| `latestVersionUrl?` | `string` |
| `linux?` | `ArchOptsMap` |
| `responseFormat?` | ``"githubReleases"`` |
| `type` | ``"static"`` \| ``"githubReleases"`` |
| `windows?` | `ArchOptsMap` |

#### Defined in

[nodeSpec.ts:61](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L61)

___

### BinaryExecution

Ƭ **BinaryExecution**: [`BaseNodeExecution`](nodeSpec.md#basenodeexecution) & \{ `binaryDownload`: [`BinaryDownload`](nodeSpec.md#binarydownload) ; `downloadUrl`: `string` ; `execPath`: `string` ; `executionTypes`: [``"binary"``] ; `input`: \{ `default?`: `string`[]  }  }

**`Param`**

binary must end in .tar.gz or .zip

#### Defined in

[nodeSpec.ts:73](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L73)

___

### DockerExecution

Ƭ **DockerExecution**: [`BaseNodeExecution`](nodeSpec.md#basenodeexecution) & \{ `executionTypes`: [``"docker"``] ; `imageName`: `string` ; `input?`: \{ `default?`: `string`[] ; `defaultConfig?`: [`ConfigValuesMap`](nodeConfig.md#configvaluesmap) ; `docker?`: \{ `containerVolumePath`: `string` ; `forcedRawNodeInput?`: `string` ; `initNodeCommand?`: `string` ; `raw?`: `string`  }  }  }

#### Defined in

[nodeSpec.ts:32](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L32)

___

### ExecutionTypes

Ƭ **ExecutionTypes**: ``"docker"`` \| ``"binary"`` \| ``"nodePackage"``

#### Defined in

[nodeSpec.ts:10](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L10)

___

### NodeExecution

Ƭ **NodeExecution**: [`NodePackageExecution`](nodeSpec.md#nodepackageexecution) \| [`DockerExecution`](nodeSpec.md#dockerexecution) \| [`BinaryExecution`](nodeSpec.md#binaryexecution) \| [`BaseNodeExecution`](nodeSpec.md#basenodeexecution)

#### Defined in

[nodeSpec.ts:84](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L84)

___

### NodePackageExecution

Ƭ **NodePackageExecution**: [`BaseNodeExecution`](nodeSpec.md#basenodeexecution) & \{ `dependencies?`: \{ `name`: `string` ; `specId`: `string`  }[] ; `executionTypes`: [``"nodePackage"``] \| `string`[] ; `services`: [`NodePackageNodeServiceSpec`](nodeSpec.md#nodepackagenodeservicespec)[]  }

#### Defined in

[nodeSpec.ts:123](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L123)

___

### NodePackageNodeServiceSpec

Ƭ **NodePackageNodeServiceSpec**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `nodeOptions` | `string`[] \| [`NodeSpecification`](nodeSpec.md#nodespecification)[] |
| `required` | `boolean` |
| `requiresCommonJwtSecret?` | `boolean` |
| `requiresFiles?` | `boolean` |
| `serviceId` | `string` |

#### Defined in

[nodeSpec.ts:114](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L114)

___

### NodePackageSpecification

Ƭ **NodePackageSpecification**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addNodeDescription?` | `string` |
| `category?` | `string` |
| `configTranslation?` | [`ConfigTranslationMap`](nodeConfig.md#configtranslationmap) |
| `description?` | `string` |
| `displayName` | `string` |
| `displayTagline?` | `string` |
| `documentation?` | \{ `binary?`: `string` ; `default?`: `string` ; `docker?`: `string`  } |
| `documentation.binary?` | `string` |
| `documentation.default?` | `string` |
| `documentation.docker?` | `string` |
| `execution` | [`NodePackageExecution`](nodeSpec.md#nodepackageexecution) |
| `iconUrl?` | `string` |
| `nodeReleasePhase?` | ``"alpha"`` \| ``"beta"`` |
| `resources?` | `LabelValuesSectionItemsProps`[] |
| `rpcTranslation?` | [`NiceNodeRpcTranslation`](rpcTranslation.md#nicenoderpctranslation) |
| `specId` | `string` |
| `systemRequirements?` | [`SystemRequirements`](systemRequirements.md#systemrequirements) |
| `version` | `string` |

#### Defined in

[nodeSpec.ts:130](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L130)

___

### NodeSpecification

Ƭ **NodeSpecification**: `Object`

**`Param`**

where the node's data will be stored

#### Type declaration

| Name | Type |
| :------ | :------ |
| `category?` | `string` |
| `configTranslation?` | [`ConfigTranslationMap`](nodeConfig.md#configtranslationmap) |
| `displayName` | `string` |
| `displayTagline?` | `string` |
| `documentation?` | \{ `binary?`: `string` ; `default?`: `string` ; `docker?`: `string`  } |
| `documentation.binary?` | `string` |
| `documentation.default?` | `string` |
| `documentation.docker?` | `string` |
| `execution` | [`NodeExecution`](nodeSpec.md#nodeexecution) |
| `iconUrl?` | `string` |
| `minorityClient?` | `boolean` |
| `nodeReleasePhase?` | ``"alpha"`` \| ``"beta"`` |
| `resources?` | `LabelValuesSectionItemsProps`[] |
| `rpcTranslation?` | [`NiceNodeRpcTranslation`](rpcTranslation.md#nicenoderpctranslation) |
| `specId` | `string` |
| `systemRequirements?` | [`SystemRequirements`](systemRequirements.md#systemrequirements) |
| `version` | `string` |

#### Defined in

[nodeSpec.ts:93](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeSpec.ts#L93)
