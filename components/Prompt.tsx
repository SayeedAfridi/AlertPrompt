import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { width } from '../constants/layout.contants';
import BaseModal, { BaseModalProps } from './BaseModal';

export interface PromptProps extends BaseModalProps {
  title: string;
  message: string;
  onOk?: (text: string) => void;
  onCancel?: () => void;
}

const Prompt: React.FC<PromptProps> = ({
  title,
  message,
  onRequestClose,
  onOk,
  onCancel,
  ...rest
}) => {
  const [text, setText] = React.useState<string>('');

  const handleOk = () => {
    onRequestClose?.();
    onOk?.(text);
  };
  const handleCancel = () => {
    onRequestClose?.();
    onCancel?.();
  };

  const handleChange = (t: string) => setText(t);

  return (
    <BaseModal {...rest}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Your Name'
              onChangeText={handleChange}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={handleCancel}
              style={{ marginRight: 8, padding: 16 }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleOk}
              style={{ marginRight: 8, padding: 16 }}
            >
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#FEA90E',
    borderRadius: 8,
    margin: 16,
    padding: 8,
  },
});

export default Prompt;
