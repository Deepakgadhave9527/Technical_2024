<script>
    What are hooks ?

    -Hooks are the new feature introduced in the React 16.8 version.
    -With help of the React Hook we can use  state and other React features without writing a class.
    -usually hook start the use keyword
    -React Hooks features to handle the local component state.
    -With help of the React Hook we can also use  react lifecycle features in function component
    -Hooks don’t work inside class component

    {/* 
    
    -Hooks are the functions which "hook into" React state and lifecycle features from function
    components.
    Hooks are the functions that connect React state and lifecycle features from the function components.
    The Effect hook lets us to perform side effects in functional components.
    It helps us to avoid redundant code in different lifecycle methods of a class component.
    It helps to group related code.
    
    */}

    --------------------------------------------------------------------
    01 useeffect()



    The purpose of the useEffect hook is to allow you to perform side effects in a functional components.
    React useEffect hook is a function that gets executed for 3 different React component lifecycles.
    Those lifecycles are componentDidMount, componentDidUpdate, and componentWillUnmount lifecycles.

    Examples of side effects you will typically perform in a React application
    are: data fetching, and manually changing the DOM in React components.  setting up a subscription
    {/* 
      useEffect(() => {
    // Mounting

    return () => {
        // Cleanup function
    }
}, [Updating])

}

*/}

    {/*
    The Effect hook lets us to perform side effects in functional components.
    It helps us to avoid redundant code in different lifecycle methods of a class component.
    It helps to group related code.
    The Effect Hook lets you perform side effects in function components:
    useEffect is like the combination of componentDidMount, componentDidUpdateand componentWillUnmount
 */}
    hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered.
    The useEffect accepts a function that is imperative in nature and a list of dependencies.
    When its dependencies change it executes the passed function.

    ------------------------------##### Basic Hooks ########  --------------------------------------------

    01 useState()


    -state can be maintained by using useState() hook.

    ##  const [array,setArray]=React.useState()     ##

    The first parameter in the array is the current state value.
    The second parameter is the function that will allow you to update the state value.

    useState should be used only inside functional components.

    {/* useState state is hook maintained local state in the component */}

    -----------------------------------------------------------------------------

    02 useReducer()

    -useReducer is a React hook function that accepts a reducer function, and an initial state. ...
    -This hook function returns an array with 2 values.

    -He first one is the state value, and the second value is the dispatch function which is further
    used to trigger an action with the help of array destructuring.


    useReducer is usually preferable to useState when you have complex state
    logic that involves multiple sub-values or when
    the next state depends on the previous one.


    The useReducer is a hook I use sometimes to manage the state of the application.
    It is very similar to the useState hook, just more complex.
    It acts as an alternate hook to the useState hook to manage complex state in your application.
    The useReducer hook uses the same concept as the reducers in Redux.
    It is basically a pure function, with no side-effects.



    It accepts a reducer function with the application initial state, returns the current application state, then dispatches
    a function.

    Although useState() is a Basic Hook and useReducer() is an Additional Hook, useState() is actually implemented with
    useReducer(). This means useReducer() is primitive and we can use useReducer() for everything can do with useState().
    Reducer is so powerful that it can apply for various use cases.

    --------------------------------------------------------------------------------




    03 useContext()


    -useContext hook is used to create common data that can be accessed throughout the
    component hierarchy without passing the props down manually to each level.

    -Context defined will be available to all the child components without involving “props”.
    creatContex()

    The React Context API allows to easily access data at different levels of the component tree, without having to pass
    data down through props.



    -------------------------------------- ### Additional Hooks:  ##------------------------------

    01 useHistory

    - The useHistory hook gives you access to the history instance that you may use to navigate.

    - Provides access to the history prop in React Router
    - Refers to the history package dependency that the router uses
    - A primary use case would be for programmatic routing with functions, like push,goback replace, etc.





    02 useLocation

    Provides access to the location prop in React Router

    It is similar to window.location in the browser itself, but this is accessible everywhere as it represents the * Router
    state and location.
    A primary use case for this would be to access the query params or the complete route string.

    03 useParams

    Provides access to search parameters in the URL
    This was possible earlier only using match.params.

    Route paramater;
    the route paramater is value passed one component to another component
    while nevigating

    useParams() hook access the  route paramater;


    04 useRouteMatch

    Provides access to the match object
    If it is provided with no arguments, it returns the closest match in the component or its parents.
    A primary use case would be to construct nested paths.



    ---------------------------------------------------------------------------------




    useCallback()
    -The useCallback hook used to Avoiding unnecessary rerendering of a child component when a function is recreated.
    -And making your application faster and more efficient.
    -The useCallback will return a memoized version of the callback that only changes if one of the
    dependencies has changed.

    useCallback: Returns a memoized callback.

    {/* -React's useCallback() Hook can be used to optimize the rendering behavior of your React function
    components.
    -This is useful when passing callbacks to optimized child components that rely on reference equality to
    prevent unnecessary renders (e.g. shouldComponentUpdate).
    useCallback: The useCallback is a react hook that returns a
    memoized callback when passed a function and a list of dependencies as parameters.
    It’s very useful when a component is passing a callback to
    its child component to prevent the rendering of the child component.
    It only changes the callback when one of its dependencies gets changed. */}


    ---------------------------------------------------------------------------------

    useMemo()


    If a function includes a complex calculation, you can avoid recomputing then you can using the useMemo() hook.
    useMemo will  returns a memoized value that is not recomputed unless if one of the
    dependencies has changed.

    useMemo: Returns a memoized value.


    {/*

    React's useMemo() Hook can be used to optimize the computation costs of your React function components.
    The useMemo()
    is similar to useCallback() except it allows you to apply memoization to any value type (not just functions).

    It does this by accepting a function which returns the value and then that function is only called when the value
    needs to be retrieved (which typically will only happen once each time an element in the dependencies array changes
    between renders).




    The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies
    but it returns the memoized value returned by the passed function.
    It recalculated the value only when one of its dependencies change.
    It is useful to avoid expensive calculations on every render when the returned value is not going to change. */}
    ---------------------------------------------------------------------------------

    useImperativeHandle()

    useImperativeHandle() customizes the instance value that is exposed to parent components when using ref. As always,
    imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef.

    ---------------------------------------------------------------------------------

    Custom Hooks:
    Custom Hooks are a mechanism to reuse stateful logic
    Custom hooks are nothing but these are javascript functions,
    if we have something common logic that we want to share between components
    then we use custom hooks.
    These are logic that will be reused in many components.
    We can create hooks using the name start with “use” keyword.

    {/*
    A custom Hook is basically a JavaScript function.
    Its name begins with "use" that could invoke other Hooks.
    The working of a custom Hook is identical to a regular function.
    The "use" in the starting describes that this particular function conforms to the rules of Hooks.
    Moreover, building custom Hooks enables you to extract component logic inside reusable functions.
    We create a different function and write a shared logic here. */}

    ---------------------------------------------------------------------------------------------

    What is useRef in React?
    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
    Syntax: const refContainer = useRef(initialValue);
    The useRef returns a mutable ref object.
    Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.

    -----------------------------------------------------------------------------------------------
    While both useMemo and useCallback remember something between renders until the dependancies change, the difference is just what they remember.

    useMemo will remember the returned value from your function.

    useCallback will remember your actual function.

    The main difference between the two is that ‘useCallback’ returns a memoized callback and ‘useMemo’ returns a memoized value that is the result of the function parameter.

    --

</script>
