import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {colors, spacingStyles} from 'styles';
import SelectDropdown from 'react-native-select-dropdown';
import Chevron from 'assets/icons/ChevronDown';
import {RootState} from 'store';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setDescription, setStatus, setTitle} from 'store/slices/post-slice';

export default function DetailsInput() {
  //State
  const {title, description, status} = useSelector(
    (state: RootState) => state.post,
  );
  const statusData = ['Draft', 'Published'];

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={colors.GREY}
          style={styles.titleInput}
          value={title}
          onChangeText={value => dispatch(setTitle(value))}
        />
      </View>
      <View style={[spacingStyles.mT8]}>
        <SelectDropdown
          buttonStyle={styles.statusContainer}
          buttonTextStyle={{
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 20,
            marginLeft: 4,
            textAlign: 'left',
            color: status.length ? colors.BLACK : colors.GREY,
          }}
          defaultValue={null}
          data={statusData}
          onSelect={(selectedItem, index) => {
            dispatch(setStatus(selectedItem));
          }}
          defaultButtonText={'Status'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          renderDropdownIcon={() => {
            return <Chevron />;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>

      <View style={[styles.desContainer, spacingStyles.mT12]}>
        <TextInput
          placeholder="Description"
          placeholderTextColor={colors.GREY}
          style={styles.titleInput}
          multiline
          value={description}
          onChangeText={value => dispatch(setDescription(value))}
        />
      </View>
    </View>
  );
}
