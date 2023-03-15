import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BotonFlotante, Header, ItemList, ModalLista } from '../components';


const HomeScreen = () => {

  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [addModal, setAddModal] = useState(false);

  const openTask = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const openNewModal = () => {
    setAddModal(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem({});
  };

  const onDeleteTask = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem({});
  };

  const stateChange = (id) => {
    setModalVisible(!modalVisible);
    items.find(item => item.id === id).state = true;
    setSelectedItem({});
  };

  return (
    <View style={styles.screen}>
      <Header />
      <ItemList items={items} openTask={openTask} />
      <BotonFlotante setModalVisible={setModalVisible}/>
      <ModalLista
        onCancelModal={onCancelModal}
        onDeleteTask={onDeleteTask}
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        stateChange={stateChange}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})