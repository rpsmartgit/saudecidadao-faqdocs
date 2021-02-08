---
id: use-backhandler
title: useBackHandler
sidebar_label: useBackHandler
---

This hook, correctly handles back button, using [BackHandler](https://reactnative.dev/docs/backhandler) from `react-native`.

### Usage

```tsx
import { useBackHandler } from "react-native-newestapps-hooks";

// ...

useBackHandler(() => {
  console.log("back pressed");
});
```
