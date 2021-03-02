import React from 'react'
import {FlatList, Text, View} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function getUserItem({item}) {
        return (
            // <ListItem
            // // leftAvatar={{source: {uri: user.avatarUrl}}}
            // key={item.id}
            // title={item.name}
            // subtitle={item.email}
            // bottomDivider
            // onPress={() => props.navigation.navigate('UserForm')}
            // />
            <ListItem key={item.id} onPress={() => props.navigation.navigate('UserForm')} >
                <Avatar source={{uri: item.avatarUrl}} />

                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}