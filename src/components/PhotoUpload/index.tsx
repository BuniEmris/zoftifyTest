import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import PlusIcon from 'assets/icons/PlusIcon';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {setUri} from 'store/slices/post-slice';
import {RootState} from 'store';
import {useSelector} from 'react-redux';

export default function PhotoUpload() {
  const {uri} = useSelector((state: RootState) => state.post);

  const dispatch = useDispatch();

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(setUri(image.path));
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Photo</Text>

      <View style={style.uploadContainer}>
        {uri ? (
          <Image
            style={{width: 80, height: 80, borderRadius: 12}}
            source={{uri}}
          />
        ) : (
          <TouchableOpacity onPress={pickPicture}>
            <PlusIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
