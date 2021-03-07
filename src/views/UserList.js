import React, { useContext } from 'react'
import {Alert, FlatList, Text, View } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import users from '../data/users'
import UsersContext from '../context/UsersContext'

export default props => {
   const {state, dispatch} = useContext(UsersContext)


    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário','Deseja excluir o usuario'+user.id+'?',[
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: "deleteUser",
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

function getActions(user){
    return (
        <>
            <Button onPress={() => props.navigation.navigate('UserForm', user)} 
            type="clear"
            icon={<Icon name="edit" size={25} color="orange"/>}
            />
            <Button onPress={() => confirmUserDeletion(user)} 
            type="clear"
            icon={<Icon name="delete" size={25} color="red"/>}
            />
        </>
    )
}


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
            <ListItem rightElement={getActions(item)} key={item.id} onPress={() => props.navigation.navigate('UserForm',item)} >
                <Avatar source={{uri: item.avatarUrl}} />
                <ListItem.Title >{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                <ListItem >{getActions(item)}</ListItem>
                {/* <ListItem.Content>{getActions(user)}</ListItem.Content> */}
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}