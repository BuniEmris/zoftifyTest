import {View, Text, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import layoutStyles from 'styles/layoutStyles';
import Header from 'components/Header';
import PostBlock from 'components/PostBlock';
import {Post} from 'types';
import {colors, positionStyles, spacingStyles} from 'styles';
import {RootState} from 'store';
import {useSelector} from 'react-redux';

export default function Home({navigation}: any) {
  const {postData} = useSelector((state: RootState) => state.post);
  const renderItem = ({item, index}: {item: Post; index: number}) => (
    <PostBlock data={item} />
  );
  return (
    <SafeAreaView
      edges={['right', 'top', 'left']}
      style={[layoutStyles.safeAreaView]}>
      <View
        style={[
          positionStyles.columnSpaceBetwen,
          {backgroundColor: colors.LIGHT_BG},
        ]}>
        <Header icon />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={postData || []}
          renderItem={renderItem}
          keyExtractor={(item: any, index: number) => item?.id}
          ListFooterComponent={() => <View style={spacingStyles.mB20} />}
        />
        <View style={[spacingStyles.pH16, spacingStyles.mB80]}>
          <TouchableOpacity
            style={[styles.Btn, spacingStyles.pV12]}
            onPress={() => navigation.navigate('CreatePost')}>
            <Text style={styles.BtnText}>New Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
