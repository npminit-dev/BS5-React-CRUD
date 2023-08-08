import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Emmet'
import './index.css'
import { EmmetTest } from './Emmet'
import TaskList from './TaskList'
import PhoneDirectory from './components/PhoneDirectory'
import TeamListContext from './contexts/TeamListContext'
import { TeamListContextProvider } from "./contexts/TeamListContext";
import TeamApp from "./TeamApp";

// la extension ES7 React/Redux/GraphQL/React-Native snippets nos permitira crear componentes rapidamente, creamos un archivo jsx con un componente y lo probamos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <EmmetTest/>
    <hr></hr>
    <TaskList/>
    <hr></hr> */}
    {/* UI Tree: el arbol de elementos es como se organizan los componentes, las propiedades de componentes hermanos
    (que estan en el mismo nivel de jerarquia) no son visibles entre ellos y no pueden pasarselos como argumentos
    la solucion es que un elemento padre sea el que posea esas propiedades(pueden ser funciones) y las pase a los componentes hijos mediante props 
    vamos a crear una carpeta phonedirectory con 3 componentes, el componente padre con 2 hijos y un archivo js con datos */}
    {/* <PhoneDirectory></PhoneDirectory> */}
    { /* separar componentes: podemos crear un nuevo componente Contact_card para que sea hijo de Contact_list, 
    cada Contact_card sera un contacto de esa lista de contactos, asi aplicamos la reutilizacion y separacion de componentes */}
    { /* despues de eso, nuestro UITree quedaria asi: 

              PhoneDirectory 
              |           |
    NewContact_form    Contact_list
                                |
                              ContactList_card

    Estamos pasando funciones y propiedades locales del padre a los hijos, a medida que este arbol crezca esto sera inmantenible
    sobre todo con arboles de muchos niveles que recibiran propiedades/funciones que no usan solo para pasarlos a componentes hijos,
    esto se llama 'prop-drilling'. La solucion es el useContext:
    useContext permite a un componente consumir datos desde un "contexto" en lugar de pasarlo como props. 
    Un contexto es una forma de compartir datos que se pueden considerar "globales" para un árbol de componentes en React. 
    Un contexto se define utilizando el método createContext, y luego se puede utilizar en componentes usando el hook useContext.
    Aplicaremos esto en una carpeta con los componentes de un nuevo ejercicio, y usando un contexto creando uno en una nueva carpeta 'contextos'
    */ }
    {/* <br></br>
    <hr></hr>
    <br></br> */}
    
    <TeamListContextProvider> {/* AQUI DEBEMOS RENDERIZAR EL COMPONENTE DE CONTEXTO, ENVOLVIENDO A LA APLICACION CONTENEDORA (NO CONFUNDIR CON EL CONTEXTO EN SI) */}
      <TeamApp></TeamApp>
    </TeamListContextProvider>

    

  
  </React.StrictMode>

)
