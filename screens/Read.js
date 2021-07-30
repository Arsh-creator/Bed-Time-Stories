import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar, Header} from 'react-native-elements';
import db from '../config'

export default class Read extends React.Component{

    render(){
        return(
           
            <View style={styles.container}> 
                <Text> A Lion lay asleep in the forest, his great head resting on his paws. A timid little Mouse came upon him unexpectedly, and in her fright and haste to get away, ran across the Lion's nose. Roused from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her.
</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    }
})
