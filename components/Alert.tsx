import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { width } from '../constants/layout.contants';
import BaseModal, { BaseModalProps } from './BaseModal';

export interface AlertProps extends BaseModalProps {
  title: string;
  message: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  title,
  message,
  onRequestClose,
  onOk,
  onCancel,
  ...rest
}) => {
  const handleOk = () => {
    onRequestClose?.();
    onOk?.();
  };
  const handleCancel = () => {
    onRequestClose?.();
    onCancel?.();
  };
  return (
    <BaseModal {...rest}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
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
});

export default Alert;
