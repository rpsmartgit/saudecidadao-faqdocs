---
id: use-device
title: useDevice
sidebar_label: useDevice
---

:::note
Must be called somewhere inside [PushProvider](/docs/responsive-provider)
:::

### Object description

Returns an array, with functions and objects in the following order

| Key                      | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| deviceUuid:`string`      | Device UUID, that is generated and stored at first launch, and should be used to identify in backend |
| devicePushToken:`string` | Actual push token (FCM) to receive push notifications                                                |

### Usage

```tsx
import { useDevice } from "react-native-newestapps-push";

// ...

const [uuid, pushToken] = useDevice();
```
