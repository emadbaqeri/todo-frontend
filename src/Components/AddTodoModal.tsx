import * as React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

interface AddTodoModalProps {
  visible: boolean;
  onRequestClose: () => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({
  children,
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      onRequestClose={onRequestClose}
      transparent
      animationType="slide"
      visible={visible}
      style={styles.container}>
      <View style={styles.wrapper}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddTodoModal;
