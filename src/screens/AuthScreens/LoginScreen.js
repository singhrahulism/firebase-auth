import React, { useEffect, useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as firebaseAuth from 'firebase/auth'

import AuthContext from '../../context/AuthContext'

const LoginScreen = () => {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isSignedIn, handleSignIn, handleSignUp } = useContext(AuthContext)

    useEffect(() => {
        const auth = firebaseAuth.getAuth()
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user)
            {
                navigation.navigate('Home')
            }
        })
    }, [])

    const handleEmail = (email) => {
        setEmail(email)
    }
    
    const handlePassword = (pass) => {
        setPassword(pass)
    }

    return <KeyboardAvoidingView style={styles.container}>
        {/* E-mail */}
        <View style={styles.textInputViewContainer}>
            <TextInput
                value={email}
                style={styles.textInputContainer}
                placeholder={'E-mail or username'}
                onChangeText={text => handleEmail(text)}
            />
        </View>
        
        {/* Password */}
        <View style={styles.textInputViewContainer}>
            <TextInput
                value={password}
                style={styles.textInputContainer}
                placeholder={'Password'}
                onChangeText={pass => handlePassword(pass)}
                secureTextEntry
            />
        </View>

        <View style={{height: 35}} />
        
        {/* Login Button */}
        <TouchableOpacity
            style={[ styles.baseButtonContainer, styles.loginButtonContainer ]}
            activeOpacity={0.65}
            onPress={() => {handleSignIn(email, password)}}
        >
            <Text style={{fontSize: 18, color: 'white'}} >Login</Text>
        </TouchableOpacity>
        
        {/* SignUp Button */}
        <TouchableOpacity
            style={[ styles.baseButtonContainer, styles.signUpButtonContainer ]}
            activeOpacity={0.65}
            onPress={() => {handleSignUp(email, password)}}
        >
            <Text style={{fontSize: 18, color: '#0783fa'}} >Sign Up</Text>
        </TouchableOpacity>

    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputViewContainer: {
        width: '70%',
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 5
    },
    textInputContainer: {
        fontSize: 18
    },
    baseButtonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 5,
        marginVertical: 2
    },
    loginButtonContainer: {
        backgroundColor: '#0783fa',
    },
    signUpButtonContainer: {
        backgroundColor: 'white',
        borderColor: '#0783fa',
        borderWidth: 1
    }
})

export default LoginScreen ;