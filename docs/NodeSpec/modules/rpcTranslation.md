[nice-node](../index.md) / [Modules](../modules.md) / rpcTranslation

# Module: rpcTranslation

## Table of contents

### Type Aliases

- [NiceNodeRpcTranslation](rpcTranslation.md#nicenoderpctranslation)
- [RpcTranslation](rpcTranslation.md#rpctranslation)

## Type Aliases

### NiceNodeRpcTranslation

Ƭ **NiceNodeRpcTranslation**: `"eth-l1"` \| `"eth-l1-beacon"` \| `"eth-l2-op-stack"` \| `"eth-l2-starknet"` \| `"eth-l2-arbitrum"` \| `"eth-l2-consensus"` \| `"farcaster-l1"`

#### Defined in

[rpcTranslation.ts:21](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/rpcTranslation.ts#L21)

---

### RpcTranslation

Ƭ **RpcTranslation**: `Object`

#### Type declaration

| Name                | Type                                                                                                           |
| :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `request`           | \{ `message?`: `any` ; `method`: `"GET"` \| `"POST"` ; `protocol?`: `"http"` \| `"ws"` ; `urlPath`: `string` } |
| `request.message?`  | `any`                                                                                                          |
| `request.method`    | `"GET"` \| `"POST"`                                                                                            |
| `request.protocol?` | `"http"` \| `"ws"`                                                                                             |
| `request.urlPath`   | `string`                                                                                                       |
| `response`          | \{ `path`: `string` ; `value`: `string` }[]                                                                    |

#### Defined in

[rpcTranslation.ts:3](https://github.com/NiceNode/nice-node/blob/2e05c26b/src/common/rpcTranslation.ts#L3)
