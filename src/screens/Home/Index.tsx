import { Text, TextInput, View, TouchableOpacity } from "react-native";

import {styles} from './styles'

export function Home() {

    function handleParticpantAdd(){
        console.log('Participante adicionado')
    }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Terça, 25 de julho de 2023</Text>

      <View style={styles.form}>
        
        <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticpantAdd} >
            <Text style={styles.buttonText}>
                + 
            </Text>
        </TouchableOpacity>

      </View>

     
    </View>
    
  )
}

