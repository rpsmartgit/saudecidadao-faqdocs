---
id: receiving-messages
title: Message Listener
sidebar_label: Receiving Messages
---

:::note
Must be called somewhere inside [ResponsiveProvider](/docs/responsive-provider)
:::

## Listening for remote messages

An event is emitted through `DeviceEventEmitter`, with key `@Newestapps:Push:REMOTE_MESSAGE`, all listeners added to your components that watch this event, will receve a `remoteMessage` (**FOREGROUND ONLY**)

Alternatively, we We provide an easy way to watch remote messages from inside your components. That means, it will automagically take controll of component lifecycle, and stop listening when component goes out of screen. See below:

```tsx
import { MessageListener, RemoteMessage } from 'react-native-newestapps-push'

export default function DoSomethingAmazingWithPush() => {
	return (
		<>
			{/** ... My component code*/}

			<MessageListener
				onMessage={(remoteMessage: RemoteMessage) => {
					console.log('Just received this: ', remoteMessage);
				}}
			/>
		</>
	)
}
```

### RemoteMessage

```ts
type NotificationDetail = {
  android: any;
  body: string;
  title: string;
};

type RemoteMessage = {
  collapseKey: string;
  data: any;
  from: string;
  messageId: string;
  notification: NotificationDetail;
  sentTime: number;
  ttl: number;
};
```

### StoredProperty

```ts
enum StoredProperty {
  DEVICE_UUID = "@Newestapps:Push:DEVICE_UUID",
  PUSH_TOKEN = "@Newestapps:Push:PUSH_TOKEN",
  REMOTE_MESSAGE = "@Newestapps:Push:REMOTE_MESSAGE",
}
```

### MessageListenerProps

```ts
type MessageListenerProps = {
  onMessage: (message: RemoteMessage) => void;
};
```

### Usage

```tsx
import { useDevice } from "react-native-newestapps-push";

// ...

const [uuid, pushToken] = useDevice();
```
