# Le contextAPI
## Qu'est-ce que le contextAPI ?

Le contextAPI est un outil qui permet de gérer l'état global d'une application React. Il permet de passer des données à travers l'arbre des composants sans avoir à passer les props manuellement à chaque niveau.

## Pourquoi utiliser le contextAPI ?

Le contextAPI est utile pour les données qui sont utilisées dans beaucoup de composants différents. Il permet de ne pas avoir à passer les props manuellement à chaque niveau de l'arbre des composants.
> Il est souvent utilisé pour les données de l'utilisateur connecté, le thème de l'application, les préférences de l'utilisateur, etc.

## Comment utiliser le contextAPI ?

### Créer un context

Pour créer un context, il faut utiliser la méthode `createContext` de la librairie `react`.

```js
import { createContext } from 'react';

// createContext prend en paramètre la valeur par défaut du context,
// si aucun paramètre n'est passé la valeur par défaut est undefined

const MyContext = createContext(); // valeur par défaut : undefined
```

### Fournir un context

Pour fournir un context, il faut utiliser le composant `Provider` qui vient avec le context.

```js
import { createContext } from 'react';

const MyContext = createContext();

const App = () => {
  return (
    <MyContext.Provider>
      {/* ... */}
    </MyContext.Provider>
  );
};
```

Le composant `Provider` prend en paramètre une prop `value` qui correspond à la valeur du context.

```js
import { createContext } from 'react';

const MyContext = createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello World">
      {/* ... */}
    </MyContext.Provider>
  );
};
```

### Consommer un context

Pour consommer un context, il faut utiliser le hook `useContext` qui vient avec le context.

```js
import { createContext, useContext } from 'react';

const MyContext = createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello World">
      <MyComponent />
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const value = useContext(MyContext);

  return (
    <div>
      {value}
    </div>
  );
};
```

### Il est possible de créer un context dans un seul fichier comme ceci :

```js
import { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value="Hello World">
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
```

### Et de l'utiliser dans un autre fichier comme ceci :

```js
import { MyContextProvider, useMyContext } from './MyContext';

const App = () => {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
};

const MyComponent = () => {
  const value = useMyContext();

  return (
    <div>
      {value}
    </div>
  );
};
```

## Exemple d'utilisation du contextAPI

### Création du context

```js

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
```

### Utilisation du context

```js
import { useUserContext } from './UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <MyComponent />
    </UserContextProvider>
  );
};

const MyComponent = () => {
  const { user, setUser } = useUserContext();

  return (
    <div>
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );
};
```

## Exemple d'utilisation du contextAPI avec un reducer

### Création du context

```js
import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
```

### Utilisation du context

```js

import { useUserContext } from './UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <MyComponent />
    </UserContextProvider>
  );
};

const MyComponent = () => {
  const { state, dispatch } = useUserContext();

  return (
    <div>
      {state.user ? (
        <div>
          <p>{state.user.name}</p>
          <p>{state.user.email}</p>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );
};
```

# Conclusion 

Le contextAPI est un outil très utile pour gérer l'état global d'une application React. Il permet de passer des données à travers l'arbre des composants sans avoir à passer les props manuellement à chaque niveau.
Il est également possible de faire passer des fonctions à travers l'arbre des composants pour modifier l'état global de l'application.
