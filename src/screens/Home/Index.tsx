import { Text, TextInput, View, TouchableOpacity, FlatList } from "react-native";

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

