import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';

export const UseThemeSimpleUsageShowcase = () => {
  const theme = useTheme();

  return (
    <Layout style={[styles.container, { backgroundColor: theme['color-primary-default'] }]}>
      <Text category='h4' status='control'>
        I use primary color as background!
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
