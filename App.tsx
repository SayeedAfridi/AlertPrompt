import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  Button,
  InteractionManager,
  StyleSheet,
  View,
} from 'react-native';
import { Alert, Prompt } from './components';

export default function App() {
  const [alertVisible, setAlertVisible] = React.useState<boolean>(false);
  const [promptVisible, setPromptVisible] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');

  const closeAlert = () => {
    InteractionManager.runAfterInteractions(() => {
      setAlertVisible(false);
    });
  };
  const showAlert = () => {
    setAlertVisible(true);
  };

  const handleOk = () => {
    console.log('Ok');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  const showPrompt = () => {
    setPromptVisible(true);
  };

  const closePrompt = () => {
    setPromptVisible(false);
  };

  const handlePromptOk = (t: string) => {
    setName(t);
  };

  const handlePromptCancel = () => {
    setName('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' translucent={true} />
      {name ? <Text>Hello {name}!</Text> : null}
      <View style={{ height: 10 }} />
      <Button title='Show Custom Alert' onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title='Show Custom Prompt' onPress={showPrompt} />
      <Alert
        title='Title of the alert'
        message='This is the message of the alert. You can pass any text as message'
        visible={alertVisible}
        onRequestClose={closeAlert}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <Prompt
        title='What is you name?'
        message='Please enter your name on the Text Input box'
        visible={promptVisible}
        onRequestClose={closePrompt}
        onOk={handlePromptOk}
        onCancel={handlePromptCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
