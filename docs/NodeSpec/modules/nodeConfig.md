[Node Spec examples](../index.md) / [Modules](../modules.md) / nodeConfig

# Module: nodeConfig

## Table of contents

### Type Aliases

- [ConfigKey](nodeConfig.md#configkey)
- [ConfigTranslation](nodeConfig.md#configtranslation)
- [ConfigTranslationAddNodeFlow](nodeConfig.md#configtranslationaddnodeflow)
- [ConfigTranslationControl](nodeConfig.md#configtranslationcontrol)
- [ConfigTranslationMap](nodeConfig.md#configtranslationmap)
- [ConfigValue](nodeConfig.md#configvalue)
- [ConfigValuesMap](nodeConfig.md#configvaluesmap)
- [FilePathControl](nodeConfig.md#filepathcontrol)
- [MultiSelectControl](nodeConfig.md#multiselectcontrol)
- [SelectControl](nodeConfig.md#selectcontrol)
- [SelectTranslation](nodeConfig.md#selecttranslation)
- [TextControl](nodeConfig.md#textcontrol)

### Variables

- [FilePathControlType](nodeConfig.md#filepathcontroltype)

### Functions

- [buildCliConfig](nodeConfig.md#buildcliconfig)

## Type Aliases

### ConfigKey

Ƭ **ConfigKey**: `string`

#### Defined in

[nodeConfig.ts:58](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L58)

___

### ConfigTranslation

Ƭ **ConfigTranslation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addNodeFlow?` | [`ConfigTranslationAddNodeFlow`](nodeConfig.md#configtranslationaddnodeflow) |
| `category?` | `string` |
| `cliConfigPrefix?` | `string` \| `string`[] |
| `defaultValue?` | [`ConfigValue`](nodeConfig.md#configvalue) |
| `displayName` | `string` |
| `documentation?` | `string` |
| `hideFromUserAfterStart?` | `boolean` |
| `infoDescription?` | `string` |
| `initCommandConfig?` | `boolean` |
| `niceNodeDefaultValue?` | [`ConfigValue`](nodeConfig.md#configvalue) |
| `uiControl` | [`ConfigTranslationControl`](nodeConfig.md#configtranslationcontrol) |
| `valuesJoinStr?` | `string` |
| `valuesWrapChar?` | `string` |
| `warning?` | `string` |

#### Defined in

[nodeConfig.ts:41](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L41)

___

### ConfigTranslationAddNodeFlow

Ƭ **ConfigTranslationAddNodeFlow**: ``"required"`` \| ``"advanced"``

#### Defined in

[nodeConfig.ts:39](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L39)

___

### ConfigTranslationControl

Ƭ **ConfigTranslationControl**: [`FilePathControl`](nodeConfig.md#filepathcontrol) \| [`SelectControl`](nodeConfig.md#selectcontrol) \| [`MultiSelectControl`](nodeConfig.md#multiselectcontrol) \| [`TextControl`](nodeConfig.md#textcontrol)

#### Defined in

[nodeConfig.ts:31](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L31)

___

### ConfigTranslationMap

Ƭ **ConfigTranslationMap**: `Record`\<[`ConfigKey`](nodeConfig.md#configkey), [`ConfigTranslation`](nodeConfig.md#configtranslation)\>

#### Defined in

[nodeConfig.ts:60](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L60)

___

### ConfigValue

Ƭ **ConfigValue**: `string` \| `string`[] \| `undefined`

#### Defined in

[nodeConfig.ts:37](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L37)

___

### ConfigValuesMap

Ƭ **ConfigValuesMap**: `Record`\<[`ConfigKey`](nodeConfig.md#configkey), `string`\>

#### Defined in

[nodeConfig.ts:59](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L59)

___

### FilePathControl

Ƭ **FilePathControl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `serviceConfigs?` | [`ServiceConfigs`](nodePackageConfig.md#serviceconfigs) |
| `type` | ``"filePath"`` |

#### Defined in

[nodeConfig.ts:4](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L4)

___

### MultiSelectControl

Ƭ **MultiSelectControl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `controlTranslations` | [`SelectTranslation`](nodeConfig.md#selecttranslation)[] |
| `type` | ``"select/multiple"`` |

#### Defined in

[nodeConfig.ts:27](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L27)

___

### SelectControl

Ƭ **SelectControl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `controlTranslations` | [`SelectTranslation`](nodeConfig.md#selecttranslation)[] |
| `type` | ``"select/single"`` |

#### Defined in

[nodeConfig.ts:23](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L23)

___

### SelectTranslation

Ƭ **SelectTranslation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | `string` |
| `info?` | `string` |
| `serviceConfigs?` | [`ServiceConfigs`](nodePackageConfig.md#serviceconfigs) |
| `value` | `string` |

#### Defined in

[nodeConfig.ts:14](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L14)

___

### TextControl

Ƭ **TextControl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `serviceConfigs?` | [`ServiceConfigs`](nodePackageConfig.md#serviceconfigs) |
| `type` | ``"text"`` |

#### Defined in

[nodeConfig.ts:9](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L9)

## Variables

### FilePathControlType

• `Const` **FilePathControlType**: ``"filePath"``

#### Defined in

[nodeConfig.ts:3](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L3)

## Functions

### buildCliConfig

▸ **buildCliConfig**(`param0`): `string`

Exclude config keys is used when starting a node with docker and avoiding
using the dataDir key because the dataDir key is used for the docker volume mount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `param0` | `Object` |
| `param0.configTranslationMap?` | [`ConfigTranslationMap`](nodeConfig.md#configtranslationmap) |
| `param0.configValuesMap` | [`ConfigValuesMap`](nodeConfig.md#configvaluesmap) |
| `param0.excludeConfigKeys?` | `string`[] |

#### Returns

`string`

#### Defined in

[nodeConfig.ts:88](https://github.com/NiceNode/nice-node/blob/b73322de/src/common/nodeConfig.ts#L88)
