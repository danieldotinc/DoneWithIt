import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'title 1',
    description: 'this is my first description',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'title 2',
    description: 'this is the second description',
    image: require('../assets/daniel2.jpeg'),
  },
];
const newMessages = [
  {
    id: 3,
    title: 'title 3',
    description: 'this is my third description',
    image: require('../assets/daniel1.jpeg'),
  },
  {
    id: 4,
    title: 'title 4',
    description: 'this is the fourth description',
    image: require('../assets/trul.png'),
  },
];

const MessagesScreen = props => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => setMessages(messages.filter(item => item.id != message.id));

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevrons
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(newMessages)}
      />
    </Screen>
  );
};

export default MessagesScreen;
