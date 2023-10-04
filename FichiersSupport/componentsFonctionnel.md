# Les components fonctionnels

## Qu'est-ce qu'un component fonctionnel ?

Un component fonctionnel est une fonction qui retourne du `JSX`.

```js
const MyComponent = () => {
  return (
    <div>
      {/* ... */}
    </div>
  );
};
```

## Les props

> Les props sont des paramètres passés à un component.
> 
> Les props sont en lecture seule, il est impossible de les modifier.
> 
> Les props sont passées en paramètre de la fonction.

```js

const MyComponent = (props) => {
  return (
    <div>
      {props.myProp}
    </div>
  );
};

const App = () => {
  return (
    <MyComponent myProp="Hello World" />
  );
};
```

## Les children

> Les children sont les éléments passés entre les balises d'ouverture et de fermeture d'un component.
> 
> Il peut s'agir d'un `string`, d'un `number`, d'un `boolean`, d'un `array`, d'un `object`, de `JSX` ou d'un `component`.

```js
const MyComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <MyComponent>
      Hello World
    </MyComponent>
  );
};
```

## Les props par défaut

> Il est possible de définir des props par défaut pour un component fonctionnel.
> 
> Pour cela, il faut utiliser la propriété `defaultProps` de la fonction.

```js
const MyComponent = ({ myProp }) => {
  return (
    <div>
      {myProp}
    </div>
  );
};

MyComponent.defaultProps = {
  myProp: 'Hello World',
};

const App = () => {
  return (
    <MyComponent />
  );
};
```

## Les props de type

> Il est possible de définir le type des props pour un component fonctionnel.
> 
> Pour cela, il faut utiliser la propriété `propTypes` de la fonction.
> 
> Il est possible d'utiliser le package `prop-types` pour définir les types des props.

> Il est également possible de définir le type des props children. Il existe un type `node` qui permet de définir que les children peuvent être de n'importe quel type.

```js
import PropTypes from 'prop-types';

const MyComponent = ({ myProp }) => {
  return (
    <div>
      {myProp}
    </div>
  );
};

MyComponent.propTypes = {
  myProp: PropTypes.string,
};

const App = () => {
  return (
    <MyComponent myProp="Hello World" />
  );
};
```

## Les props de type requis

> Il est possible de définir des props de type requis pour un component fonctionnel.
> 
> Pour cela, il faut utiliser la propriété `propTypes` de la fonction.

```js
import PropTypes from 'prop-types';

const MyComponent = ({ myProp }) => {
  return (
    <div>
      {myProp}
    </div>
  );
};

MyComponent.propTypes = {
  myProp: PropTypes.string.isRequired,
};

const App = () => {
  return (
    <MyComponent myProp="Hello World" />
  );
};
```
