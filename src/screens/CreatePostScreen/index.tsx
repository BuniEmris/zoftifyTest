import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import layoutStyles from 'styles/layoutStyles';
import {colors, positionStyles, spacingStyles} from 'styles';
import Header from 'components/Header';
import DetailsInput from 'components/DetailsInput';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import styles from 'screens/Home/styles';
import PhotoUpload from 'components/PhotoUpload';
import {useDispatch} from 'react-redux';
import {
  setUri,
  setPostData,
  setTitle,
  setStatus,
  setDescription,
} from 'store/slices/post-slice';
import moment from 'moment';

export default function CreatePostScreen({navigation}: any) {
  //State
  const {title, description, status, postData, uri} = useSelector(
    (state: RootState) => state.post,
  );

  const dispatch = useDispatch();

  const onSumbit = async () => {
    await dispatch(
      setPostData({
        title: title,
        status: status,
        description: description,
        image: uri,
        createdTime: moment(new Date()).format('DD/MM/YY hh:mm a'),
      }),
    );
    dispatch(setTitle(''));
    dispatch(setStatus(''));
    dispatch(setDescription(''));
    dispatch(setUri(''));
    await navigation.navigate('Home');
  };
  return (
    <SafeAreaView
      edges={['right', 'top', 'left']}
      style={[layoutStyles.safeAreaView]}>
      <View style={[{flex: 1, backgroundColor: colors.LIGHT_BG}]}>
        <Header goBack={() => navigation.goBack()} />
        <DetailsInput />
        <View style={positionStyles.columnSpaceBetwen}>
          <PhotoUpload />
          <View style={[spacingStyles.pH16]}>
            <TouchableOpacity
              style={[styles.Btn, spacingStyles.pV12, spacingStyles.mB75]}
              onPress={onSumbit}>
              <Text style={styles.BtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
