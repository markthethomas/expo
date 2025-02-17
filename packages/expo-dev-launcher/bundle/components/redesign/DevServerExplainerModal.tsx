import { Text, Spacer, View } from 'expo-dev-client-components';
import * as React from 'react';

export function DevServerExplainerModal() {
  return (
    <View>
      <Spacer.Vertical size="small" />
      <Text size="medium">Start a local development server with:</Text>
      <Spacer.Vertical size="small" />

      <View bg="secondary" border="default" rounded="medium" padding="medium">
        <Text type="mono">expo start</Text>
      </View>

      <Spacer.Vertical size="large" />
      <Text>Then, select the local server when it appears here.</Text>
      <Spacer.Vertical size="small" />
      <Text>
        Alternatively, open the Camera app and scan the QR code that appears in your terminal
      </Text>
    </View>
  );
}
