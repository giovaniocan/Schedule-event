import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";

import {styles} from './styles'
import { Particpant } from "../../components/Particpant";
import { useState } from "react";

export function Home() {

   const [participants, setParticipants] = useState<string[]>([])
   const [participanteName, setParticipanteName] = useState('')

    function handleParticpantAdd(){
        if(participants.includes(participanteName)){
           return Alert.alert('Participante existe', 'Já existe um participante com esse nome')
        }
        setParticipants(prevState => [...prevState, participanteName])

        setParticipanteName('')
    }

    function handleParticpantRemove(name: string){
        Alert.alert("Remover", `Tem certeza que deseja remover o/a ${name} ?`, [
            {
                text:'Sim',
                onPress:() => setParticipants(state => state.filter(participant => participant !== name))
            },
            {
                text:'Não',
                style:'cancel',
            }
        ])
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
            onChangeText={text => setParticipanteName(text) }
            value={participanteName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticpantAdd} >
            <Text style={styles.buttonText}>
                + 
            </Text>
        </TouchableOpacity>

      </View>


      <FlatList
         data={participants}
         keyExtractor={item => item} 
         renderItem={({item}) => (
            <Particpant 
                key={item} 
                name={item} 
                onRemove={handleParticpantRemove} />
         )}
         showsVerticalScrollIndicator={false}
         ListEmptyComponent={() => ( // it works like a skeleton component
            <Text style={styles.listEmptyText}>
                Ninguem chegou no evento ainda? Adicione participantes e organize-o!
            </Text>
            )}
        />
    </View>
    
  )
}

