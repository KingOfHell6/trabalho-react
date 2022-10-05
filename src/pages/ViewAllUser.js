import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const ViewAllItems = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_item',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listItemView = (item) => {
    return (
      <View
        key={item.item_id}
        style={{ backgroundColor: '#5f5f5f', marginTop: 20, padding: 20, borderRadius: 10 }}>
        <Text style={styles.textheader}>Código: {item.item_id}</Text>

        <Text style={styles.textheader}>Nome do item: {item.item_name}</Text>

        <Text style={styles.textheader}>Quantidade do item: {item.item_quantidade}</Text>

        <Text style={styles.textheader}>Preço do item: R$ {item.item_preco}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#303030' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textheader: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',

  },
  textbottom: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ViewAllItems;