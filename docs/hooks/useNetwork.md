---
id: use-network
title: useNetwork
sidebar_label: useNetwork
---

:::note
Must be called somewhere inside [PreferenceProvider](/docs/network-provider)
:::

### Object description

| Property              | Type                                                                                                | Description                                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                | [`NetInfoStateType`](https://github.com/react-native-netinfo/react-native-netinfo#netinfostatetype) | The type of the current connection.                                                                |
| `isConnected`         | `boolean`                                                                                           | If there is an active network connection. Note that this DOES NOT mean that internet is reachable. |
| `isInternetReachable` | `boolean`                                                                                           | If the internet is reachable with the currently active network connection.                         |
| `isWifiEnabled`       | `boolean`                                                                                           | _(Android only)_ Whether the device's WiFi is ON or OFF.                                           |
| `details`             |                                                                                                     | The value depends on the `type` value. See below.                                                  |

:::note Read official docs
This hook is only a simplifier, and all handling is made with [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo), more details at the official documentation.
:::

### Usage

```tsx
import { useNetwork } from "react-native-newestapps-hooks";

// ...

const network = useNetwork();
```
