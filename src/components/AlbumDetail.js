// @flow
import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import { Card, CardSection, Button } from './common';

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image, url } = album;
  
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail}
            source={{ uri: thumbnail_image }}/>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.image}
          source={{ uri: image }}/>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  image: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
