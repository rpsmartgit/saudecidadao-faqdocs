---
id: hooks-install
title: Installation
sidebar_label: Installation
---

Install peer dependencies if needed. (and link them)

```sh
npm install @react-native-community/hooks react-native-safe-area-context @react-native-async-storage/async-storage --save

npx react-native link react-native-safe-area-context
npx react-native link @react-native-async-storage/async-storage
```

Install newestapps hooks (no link needed)

```sh
npm install react-native-newestapps-hooks --save
```
