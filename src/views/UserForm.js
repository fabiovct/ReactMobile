import React, { useContext, useState } from 'react'
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'
import UsersContext from '../context/UsersContext'
// import { TextInput } from 'react-native-gesture-handler'

export default ({route, navigation}) => {
    const [user,setuser] =  useState(route.params ? route.params:{})
    const {state, dispatch} = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Name1</Text>
            <TextInput
            style={style.input}
                onChangeText={name=>setuser({...user, name})}
                placeholder="informe o nome"
                value={user.name}
            />
                <Text>Email</Text>
                <TextInput
                style={style.input}
                    onChangeText={email=>setuser({...user, email})}
                    placeholder="informe o email"
                    value={user.email}
                />
                <Text>URL do Avatar</Text>
                <TextInput
                style={style.input}
                    onChangeText={avatarUrl=>setuser({...user, avatarUrl})}
                    placeholder="informe o a Url"
                    value={user.avatarUrl}
                />
                <Button
                title="Salvar"
                onPress={()=>(
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    }),
                    navigation.goBack()
                )}
                />
            </View>
    )
}


const style = StyleSheet.create({
    form:{
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})