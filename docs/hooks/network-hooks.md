---
id: network-hooks
title: Network Hooks
sidebar_label: Example Network Hooks
---

Network hooks uses [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo), for fast implementations and usage

```tsx
import { NetworkProvider, useNetwork } from "react-native-newestapps-hooks";

const ProfileScreen: React.FC = () => {
  const network = useNetwork();

  return (
    <>
      <Text
        style={{
          color: network.isConnected ? "green" : "red",
        }}
      >
        You are {network.isConnected ? "Connected" : "Disconnected"} to a
        network.
      </Text>
    </>
  );
};

const App: React.FC = () => {
  return (
    <NetworkProvider>
      <ProfileScreen />
    </NetworkProvider>
  );
};

export default App;
```
