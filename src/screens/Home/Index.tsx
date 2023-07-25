import { Text, TextInput, View, TouchableOpacity } from "react-native";

import {styles} from './styles'
import { Particpant } from "../../components/Particpant";

export function Home() {

    const participants = ['Giovani', 'Kau', 'jv', 'maca', 'adrinan', 'ana', 'frank', 'luis', 'roberto', 'python']

    function handleParticpantAdd(){
        console.log('Participante adicionado')
    }

    function handleParticpantRemove(name: string){
        console.log(name)
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

      {participants.map((particpant) => (
        <Particpant 
            key={particpant} 
            name={particpant} 
            onRemove={handleParticpantRemove} />
      ))}


      

    </View>
    
  )
}

