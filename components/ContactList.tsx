import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      id: 0,
      name: 'Foo',
      status: 'Online',
      imageURL: 'https://tal7aouy.gallerycdn.vsassets.io/extensions/tal7aouy/icons/3.8.0/1703110281439/Microsoft.VisualStudio.Services.Icons.Default',
    },
    {
      id: 1,
      name: 'Bar',
      status: 'Busy',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCe3c-r3zy3-AAp8E-bx_IVGZwefy-ic80oL7M2qcAxg&s'
    },
    {
      id: 2,
      name: 'Baz',
      status: 'Offline',
      imageURL: 'https://cdn-icons-png.flaticon.com/512/7799/7799536.png'
    },

  ];
  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({ id, name, status, imageURL }) => (
          <View key={id} style={styles.userCard}>
            <Image source={{ uri: imageURL }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 6,
    marginBottom: 4,
    borderRadius: 14,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  userStatus: {
    fontSize: 14,
  },
})