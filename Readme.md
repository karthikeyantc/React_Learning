# React Learning

> This is a repo for my React learning. Here I will update my daily progress and learnings. I will also add some useful resources that I find on the internet.

## Topics Covered

---

### **10/01/2024: Reconciliation, Virtual DOM, JSX, Components**

- **Reconciliation** - React's process of syncing changes in the application state with the DOM. [Learn more](https://reactjs.org/docs/reconciliation.html)
- **Virtual DOM** - Lightweight representation of Real DOM, used by React to minimize direct manipulation of the DOM. [Learn more](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)
- **JSX** - Syntax extension for JavaScript, used in React to describe what the UI should look like. [Learn more](https://reactjs.org/docs/introducing-jsx.html)
- **JSX syntax** - The syntax used in JSX, similar to HTML. [Learn more](https://reactjs.org/docs/introducing-jsx.html)
- **Components** - Reusable pieces of code that return a React element to be rendered to the page. [Learn more](https://reactjs.org/docs/components-and-props.html)
- **Child Components** - Components that are nested within other components. [Learn more](https://reactjs.org/docs/components-and-props.html)

---

### **11/01/2024: Props, Events, State, Forms, Communication (Parent-Child, Child-Parent), List Rendering, Keys**

- **Props** - Properties, short for properties, are inputs to a React component. They are data passed down from a parent component to a child component. [Learn more](https://reactjs.org/docs/components-and-props.html)
- **Children Props** - Special prop that allow components to be passed as data to other components. [Learn more](https://reactjs.org/docs/composition-vs-inheritance.html)
- **Events** - Built-in constructs like onClick, onChange, etc. that handle user interactions. [Learn more](https://reactjs.org/docs/handling-events.html)
- **State** - A component's state is data that can change over time, and it is private and fully controlled by the component. [Learn more](https://reactjs.org/docs/state-and-lifecycle.html)
- **useState** - Hook that lets you add React state to function components. [Learn more](https://reactjs.org/docs/hooks-state.html)
- **Forms** - Single/Multi State, Two way data binding in forms using useState. Forms in React provide a way to gather input from the user and maintain state. [Learn more](https://reactjs.org/docs/forms.html)
- **Parent to Child communication** - Props are used to pass data from parent to child. [Learn more](https://reactjs.org/docs/components-and-props.html)
- **Child to Parent communication** - Callbacks (Passing function as props) also known as lifting state up. This is a way for child to send some data back up to the parent. [Learn more](https://reactjs.org/docs/lifting-state-up.html)
- **List Rendering** - Rendering lists of data using map() function. [Learn more](https://reactjs.org/docs/lists-and-keys.html)
- **Stateful list** - List that is rendered using state. [Learn more](https://reactjs.org/docs/lists-and-keys.html)
- **Keys** - Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. It is a special prop that's reserved by React. [Learn more](https://reactjs.org/docs/lists-and-keys.html)

---

### **12/01/2024: Filter List, Conditional Rendering, Fragment, TypeScript with React**

- **Filter List** - Filter list based on user input. [Learn more](https://reactjs.org/docs/lists-and-keys.html)
- **Conditional Rendering** - Rendering different components based on a condition. [Learn more](https://reactjs.org/docs/conditional-rendering.html)
- **Conditional Rendering for Forms** - Conditional rendering for forms based on user input or actions. [Learn more](https://reactjs.org/docs/conditional-rendering.html)
- **Conditional Rendering using && operator** - In React, you can create elements conditionally using the `&&` operator. This technique allows you to inline render a component or element only when a certain condition is met. [Learn more about conditional rendering in React](https://reactjs.org/docs/conditional-rendering.html)
- **Fragment** - Fragments let you group a list of children without adding extra nodes to the DOM. [Learn more](https://reactjs.org/docs/fragments.html)

> **Note:** I decided to use typescript with react. So I will be learning typescript along with react. I will be using typescript in all my react projects from now on.

- **Typescript** - Typescript is a superset of javascript that adds types to javascript. [Learn more](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- **Typescript with React** - Typescript can be used with react to add types to react components. [Learn more](https://create-react-app.dev/docs/adding-typescript/)
- **Props with Typescript** - Props can be typed in typescript using interfaces. [Learn more](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- **useState with Typescript** - useState can be typed in typescript using generics. [Learn more](https://www.typescriptlang.org/docs/handbook/2/functions.html#using-utility-types)
- **events with Typescript** - Events can be typed in typescript using generics. [Learn more](https://www.typescriptlang.org/docs/handbook/2/functions.html#using-utility-types)

---

### **01/14/2024: React Portals**

- **React Portals** - Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. [Learn more](https://reactjs.org/docs/portals.html)

---

### **01/15/2024: React Refs, Side Effects, useEffect**

- **React Refs** - Refs provide a way to access DOM nodes or React elements created in the render method. [Learn more](https://reactjs.org/docs/refs-and-the-dom.html)
- **React Refs with Typescript** - Refs can be typed in typescript using generics. [Learn more](https://www.typescriptlang.org/docs/handbook/2/functions.html#using-utility-types)
- **Side Effects** - Side effects are anything that affects something outside the scope of the function being executed. [Learn more](https://reactjs.org/docs/hooks-effect.html)
- **useEffect** - Hook that lets you perform side effects in function components. [Learn more](https://reactjs.org/docs/hooks-effect.html)
- **Empty useEffect dependency array** - If you pass an empty array ([]), the props and state inside the effect will always have their initial values. This may be used in cases where we need to render code only when the component is initialized.  [Learn more](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

---

### **01/17/2024 : React Routing**

- **React Router Dom** - React Router Dom is a collection of navigational components that compose declaratively with your application. [Learn more](https://reactrouter.com/web/guides/quick-start)
- **BrowserRouter** - A `<BrowserRouter>` uses regular URL paths. [Learn more](https://reactrouter.com/web/api/BrowserRouter)
- **Route** - The `<Route>` component is the main building block of React Router. Anywhere that you want to only render content based on the location’s pathname, you should use a `<Route>` element. [Learn more](https://reactrouter.com/web/api/Route)
- **errorElement** - A fallback UI element to display when a `<Route>` fails to render because its path matches the current URL. [Learn more](https://reactrouter.com/web/api/Switch)
- **Dynamic Routing** - Dynamic routing is the process of routing a request to a specific destination based on the request’s URL. [Learn more](https://reactrouter.com/web/guides/quick-start)
- **Link** - The `<Link>` component is used to navigate between views of your application. It will render an `<a>` tag that links to a route in the application. [Learn more](https://reactrouter.com/web/api/Link)
- **NavLink** - A special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current URL. [Learn more](https://reactrouter.com/web/api/NavLink)
- **Absolute path** - An absolute path is a path that always points to the same location regardless of the working directory. [Learn more](https://reactrouter.com/web/api/Route/path-string-string)
- **Relative path** - A relative path is a path that points to a file or directory relative to the current working directory. [Learn more](https://reactrouter.com/web/api/Route/path-string-string) 

---

### **01/18/2024 : React Hooks**

- **UseReducer** - The useReducer hook is a more powerful alternative to the useState hook. It is used for state management in React. [Learn more](https://reactjs.org/docs/hooks-reference.html#usereducer)

---

### **01/19/2024 : React Context**

- **React Context** - Context provides a way to pass data through the component tree without having to pass props down manually at every level. [Learn more](https://reactjs.org/docs/context.html)
- **Context Provider** - Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. [Learn more](https://reactjs.org/docs/context.html#contextprovider)
- **Context Consumer** - A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. [Learn more](https://reactjs.org/docs/context.html#contextconsumer)
