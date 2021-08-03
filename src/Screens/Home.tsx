import * as React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
  AppHeader,
  TodoItem,
  ListItemDivider,
  FiltersContainer,
  AddTodoModal,
} from '../Components';

import AppInput from '../Components/AppInput';
import {useActions, useTypedSelector} from '../Hooks';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [todoText, setTodoText] = React.useState({
    title: '',
    descripion: '',
  });

  const todoInputChangeHandler = (name: string, event: string): void => {
    setTodoText(prev => {
      return {
        ...prev,
        [name]: event,
      };
    });
  };

  const [showModal, setShowModal] = React.useState(false);
  const modalVisibilityHandler = (): void => {
    setShowModal(!showModal);
  };
  const {getTodo, addTodo} = useActions();
  const {data: todos, error, loading} = useTypedSelector(state => state.todos);
  React.useEffect(() => {
    getTodo();
  }, []);

  return (
    <React.Fragment>
      <AppHeader title="To-do App" onAddPress={modalVisibilityHandler} />
      {loading && <Text> Loading...</Text>}
      {error && <Text>{error}</Text>}
      {!error && !loading && (
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ListItemDivider}
          ListHeaderComponent={FiltersContainer}
          renderItem={({item}) => {
            return <TodoItem {...{label: item.title, id: item.id}} />;
          }}
        />
      )}
      <AddTodoModal visible={showModal} onRequestClose={modalVisibilityHandler}>
        <View style={styles.addTodoModalContainer}>
          <AppInput
            placeholder="title"
            onChange={e => todoInputChangeHandler('title', e)}
            value={todoText.title}
            multiline={false}
          />

          <AppInput
            placeholder="description"
            onChange={e => todoInputChangeHandler('description', e)}
            value={todoText.descripion}
            multiline={true}
          />
          <TouchableOpacity
            onPress={() =>
              addTodo({
                title: todoText.title,
                description: todoText.descripion,
              })
            }
            style={styles.addButton}>
            <Text> ADD TODO </Text>
          </TouchableOpacity>
        </View>
      </AddTodoModal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  addTodoModalContainer: {
    height: '50%',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  addButton: {
    height: 45,
    width: '90%',
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
});

export default Home;
