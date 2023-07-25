import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";

import {styles} from './styles'
import { Particpant } from "../../components/Particpant";

export function Home() {

    const participants = ['Giovani', 'Kau', 'jv', 'maca', 'adrian', 'ana', 'frank', 'luis', 'roberto', 'python']

    function handleParticpantAdd(){
        if(participants.includes('Giovani')){
           return Alert.alert('Participante existe', 'Já existe um participante com esse nome')
        
        }
    }

    function handleParticpantRemove(name: string){
        Alert.alert("Remover", `Tem certeza que deseja remover o/a ${name} ?`, [
            {
                text:'Sim',
                onPress:() => Alert.alert("deletado !")
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

