import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/style'

const Todo = () => {
    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const axios = require("axios").default;
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
    };

    useEffect(() => {
        axios.request(options)
            .then((v) => {
                // console.log(v.data);
                setData(v.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const Add = () => {
        axios({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "POST",
            data: {
                "name": word
            }
        })
            .then(v => console.log(v))
            .catch(err => console.log(err))
    }

    const Deleting = (i) => {
        axios({
            url: `https://jsonplaceholder.typicode.com/users/${i}`,
            method: "DELETE"
        })
            .then(() => console.log("Delete successful"))
            .catch(() => console.log("Error"))
    }
    return (
        <ImageBackground source={require("../assets/rasm.jpg")} style={styles.backgroundCard}>
            <ScrollView>
                <View style={styles.cardButton}>
                    <TextInput
                        placeholder='Name'
                        value={word}
                        onChangeText={text => setWord(text)}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.buttonAdd} onPress={() => Add()} >
                        <Text ><AntDesign name='addfile' size={20} /></Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.mainNameCard}>
                    {
                        (data.length > 0) ? (
                            <View>
                                {data.map((v, i) => {
                                    return <View key={i} style={styles.nameCard}>
                                        <Text>{v.name}</Text>
                                        <TouchableOpacity style={styles.delButton} onPress={() => Deleting(i + 1)} >
                                            <Text><Feather name="delete" color="white" size={25} /></Text>
                                        </TouchableOpacity>
                                    </View>
                                })}
                            </View>
                        ) : (
                            <Text>error</Text>
                        )
                    }
                </ScrollView>


            </ScrollView>

        </ImageBackground>
    )
}


export default Todo