# Les hooks react

## Qu'est-ce qu'un hook ?

Un hook est une fonction qui permet d'ajouter des fonctionnalités à un component fonctionnel.
Leurs noms commencent toujours par `use`.
Leurs utilités sont diverses, on peut par exemple :

- gérer un état local
- gérer un des réactions à des événements
- gérer un état global
- etc.

## Les hooks de base

### useState

> Permet de gérer un état local dans un component fonctionnel.

> `useState` s'attend à recevoir en paramètre la valeur initiale de l'état et retourne un tableau contenant la valeur de l'état et une fonction pour modifier la valeur de l'état.

```js
// exemple de mise en place
const [state, setState] /*assignation par décomposition*/ = useState(initialState); 
```

### useEffect

> Permet d'exécuter du code lors du montage, de la mise à jour ou du démontage d'un component fonctionnel.

> `useEffect` s'attend à recevoir en paramètre une fonction qui sera exécutée lors du montage, de la mise à jour ou du démontage du component fonctionnel. Il peut également recevoir en paramètre un tableau de dépendances qui permet de définir quand la fonction doit être exécutée.

> Passer un tableau vide en paramètre permet d'exécuter la fonction uniquement au montage et au démontage du component fonctionnel uniquement.
> 
> Ne pas passer de paramètre permet d'exécuter la fonction à chaque mise à jour du component fonctionnel.
> 
> Passer un tableau de dépendances permet d'exécuter la fonction au montage et à chaque mise à jour du component fonctionnel uniquement si les valeurs des dépendances ont changées.

> La fonction passée en paramètre peut retourner une fonction qui sera exécutée au démontage du component fonctionnel.

```js
useEffect(() => {
  // code à exécuter au montage et lors de mise à jour de dependencies passées en paramètre
  return () => {
    // code à exécuter au démontage
  };
}, [dependencies]);
```

### useContext

> Voir [le chapitre sur le context](./contextAPI.md)