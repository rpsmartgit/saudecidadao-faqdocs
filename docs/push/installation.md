---
id: push-install
title: Installation
sidebar_label: Installation
---

:::warning
We assume, that Firebase is installed and configured for any platform that you will support.
:::

## Requirements

- `@react-native-firebase/app` - Properly installed and setup for usage
- `@react-native-firebase/messaging` - Installed and linked in your app
- `@react-native-community/async-storage` - Installed and linked in your app
- `react-native-uuid` - Installed and linked in your app

Install all of them:

```
npm install @react-native-firebase/app @react-native-firebase/messaging --save
npm install @react-native-community/async-storage react-native-uuid --save
```

And run link when necessary:

```
npx react-native link @react-native-community/async-storage
npx react-native link @react-native-firebase/app
npx react-native link @react-native-firebase/messaging
```

## Installation

Run npm install

```
npm install react-native-newestapps-push --save
```
