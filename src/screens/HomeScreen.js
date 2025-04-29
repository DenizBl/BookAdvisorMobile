// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   const [books, setBooks] = useState([]);

//   // Girişten sonra kitapları yüklemek için
//   useEffect(() => {
//     // Sabit kitap verileri
//     const sampleBooks = [
//       { id: 1, title: 'Suç ve Ceza', author: 'Fyodor Dostoyevski' },
//       { id: 2, title: 'Sefiller', author: 'Victor Hugo' },
//       { id: 3, title: 'Beyaz Diş', author: 'Jack London' },
//       { id: 4, title: '1984', author: 'George Orwell' },
//     ];
//     setBooks(sampleBooks);
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.bookItem}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text>{item.author}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Kitaplar</Text>
//       <FlatList
//         data={books}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//       />
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('AddBook')}
//       >
//         <Text style={styles.addButtonText}>+ Kitap Ekle</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   bookItem: {
//     marginBottom: 15,
//     padding: 15,
//     backgroundColor: '#e0f7fa',
//     borderRadius: 10,
//   },
//   title: { fontWeight: 'bold', fontSize: 18 },
//   addButton: {
//     backgroundColor: '#007AFF',
//     padding: 15,
//     borderRadius: 10,
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//   },
//   addButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const sampleBooks = [
      { id: 1, title: 'Suç ve Ceza', author: 'Fyodor Dostoyevski' },
      { id: 2, title: 'Sefiller', author: 'Victor Hugo' },
      { id: 3, title: 'Beyaz Diş', author: 'Jack London' },
      { id: 4, title: '1984', author: 'George Orwell' },
    ];
    setBooks(sampleBooks);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.bookItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.author}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kitaplar</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      {/* Kitap ekleme ekranı olmadığı için bu buton devre dışı bırakıldı */}
      {/* <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddBook')}>
        <Text style={styles.addButtonText}>+ Kitap Ekle</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  bookItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
  },
  title: { fontWeight: 'bold', fontSize: 18 },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
