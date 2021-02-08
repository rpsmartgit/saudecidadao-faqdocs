---
id: responsive-hooks
title: Responsive Hooks
sidebar_label: Example Responsive Hooks
---

Responsive hooks combine some libs and some checks, according to platform and screen changes.
Is usefull for pixel perfect apps that we build.

```tsx
import {
  ResponsiveProvider,
  useResponsive,
} from "react-native-newestapps-hooks";

const HomeScreen: React.FC = () => {
  const responsive = useResponsive(); // Must be inside ResponsiveContext

  return (
    <Text>
      Screen width is: {responsive.screenWidth} and Window width is{" "}
      {responsive.windowWidth}
    </Text>
  );
};

const App: React.FC = () => {
  return (
    <ResponsiveProvider>
      <HomeScreen />
    </ResponsiveProvider>
  );
};

export default App;
```
