# Adding a new Node

1. Copy a node package and service, respectively, like `ethereum` and `geth` under NodeSpecs and modify them

2. In `src/library/nodeManager.ts` import and add the node package and all services like `ethererum` `geth` and other clients

3. Add the node package to `nodeOptions` list in `src/renderer/Presentational/AddNode/AddNode.tsx`

4. (optional) Add icons for the node package and service to `src/renderer/assets/images/nodeIcons/index.tsx` square, png, and around 512x512 ideally

5. (optional) add the `rpcTranslation` type to the list `NiceNodeRpcTranslation` in `src/common/rpcTranslation.ts`

6. (optional) to show users server values add `rpcTranslation` conditions to `src/renderer/Presentational/NodeScreen/NodeScreen.tsx` and `src/renderer/state/rpcExecuteTranslation.ts` and modify the header metrics stats for the node package and service.

7. (optional) set the node color for styles at `src/renderer/assets/images/nodeIcons/index.tsx` and background (cilent/service background on node package screen) at `src/renderer/assets/images/nodeBackgrounds/index.tsx`
