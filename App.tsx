import { StatusBar } from "react-native";
import {Home} from "./src/screens/Home/Index";

export default function App() {
  return(
   <>
   <StatusBar 
     barStyle="light-content"
     backgroundColor="transparent" // change the background image
     translucent // deixa a barra de status na tela, ela nao tem um nitida diferenca entre o aplicativo e a barra de status, faz elas ficarem juntas**//
    />
    <Home />
   </>
  )
}
