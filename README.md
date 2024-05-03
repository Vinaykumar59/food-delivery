#Food delivery app

/* food delivery app components
* => Header
*body
    =>search
    =>restaurant container
        => restaurant card

* Footer
    -copyright
    -Links
    -Address
    -contact us

*/

<!-- class based components notes -->
<!-- 
1] why do we need to write super(props)
sol1: The purpose of using the super constructor with a props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as arguments to the component.
sol2: In React class components, the super() keyword is used to call the constructor of the parent class (which in most cases is React.Component). This is necessary because when you define a constructor in a subclass (your component), you override the constructor of the parent class. Without calling super(), the parent class's constructor won't be executed, potentially leading to unexpected behavior, particularly if the parent class sets up important functionality.

2] how to update state variables in class components?
sol: 
    this.setState: ({
      count: this.state.count + 1;
      count1: this.state.count1 + 1;  
    })

    here multiple state variables can be batched up and updated , instead of calling seperate setState for updating state variables.
    => behind scenes setState compares the state object with provided object and updates only the avaialble key/state variables without modifying other state variables. it does this by checking the difference between the objects.

3] How are parent and  child component life cycle method work?
sol => In parent first constructor is called, then render of parent is called , once  a child class component is encountered , child constructor is called , then child render is called and then child componentDidMount is called later parent componentDidMount is called. 

4] what is componentDidMount used for?
sol => componentDidMount is used to make API calls because in react , a component's instance is created -> then it is rendered -> then API call is made -> then the component is re-rendered.

5]Why can't we have a callback function of useEffect async?
sol => This is because the useEffect hook expects its effect function to return either a cleanup function or nothing at all. This is due to the useEffect() hook's callback function's asynchronous execution and lack of blocking. Therefore, we must follow a specific pattern if we want to call an asynchronous function inside the useEffect() hook

* Modularity => breaking code into small modules. 
* Single respponsibility principle => code performs only a specific functionality/serves a single purpose

*Chunking/Code Splitting/ Dynamic bundling/Lazy Loading/on demand loading/dynamic import

6]Why we got this error : A component suspended while responding to
    synchronous input. This will cause the UI to be replaced with a loading indicator.
    To fix, updates that suspend should be wrapped with startTransition? How does
    suspense fix this error?
sol: => We get this error because when we lazy load a component , it takes some time to download and load  the lazy component, during this time react freezes the rendering as there is no component to render. 
    <Suspense fallback={<>Your JSX </>}><YourComponent/></Suspense> 
    wrapping your component using suspense like above solves above problem , as during loading your component jsx inside fallback renders until component is ready for rendering.
 
 7] When do we and why do we need suspense?
 sol: => React Suspense is a feature introduced to handle asynchronous operations such as data fetching and code splitting in React applications. It allows components to suspend rendering while they're waiting for some data or resources to load asynchronously

 8]Advantages and disadvantages of using this code splitting pattern?
 sol: => Advantages:
        1)Reduced Initial Load Time:=> Only the essential code required for the initial render is loaded upfront, while additional code is fetched asynchronously as needed.
        
        2)Improved Performance :=> Smaller initial bundles and lazy loading of non-essential code result in improved performance, especially on slower networks or devices. 
        
        3)Better Resource Management :=> Code splitting allows you to manage resources more efficiently by loading components or modules only when they're needed. This helps conserve memory and prevents unnecessary loading of unused code.
        
        4)Scalability:=> As your application grows, code splitting becomes increasingly important for maintaining performance. It allows you to scale your application without sacrificing load times or performance.
        
        5)Enhanced Developer Experience:=> Code splitting promotes a more modular and maintainable codebase. It encourages the separation of concerns and makes it easier to reason about individual parts of your application.

    Disadvantages:
        1)Complexity :=>  Implementing code splitting adds complexity to your application. You need to carefully manage dependencies, handle loading states, and ensure that code is split in a way that doesn't break functionality or user experience.
        
        2)Tooling Dependencies:Proper code splitting often requires additional tooling and build configuration. While tools like webpack and React.lazy() make it easier, setting up and configuring these tools can be time-consuming and require expertise
        
        3)Network Overhead:=> Fetching additional code chunks over the network introduces network overhead, especially on slower connections
        
        4)Debugging Challenges:=> Code splitting can make debugging more challenging, especially when dealing with asynchronous loading and complex dependency trees. It may be harder to trace issues back to their source, requiring additional effort and tooling for debugging.
        
        5)Potential for Flickering or Delay:=> If not implemented properly, code splitting can lead to flickering or delays in rendering as components or modules are loaded asynchronously. Careful management of loading states and user experience is necessary to mitigate these issues.

9] What are the ways to style the components? 
sol: => 1)normal css
        2)sass/scss
        3)material-ui
        4)bootstrap
        5)chakra-ui
        6)styled components
        7)tailwind css
        6)Ant design



<!-- Redux Toolkit -->

#redux toolkit
    - Install @reduxjs/toolkit and react-redux
    -Build our store
    -connect our store to our app
    -slice (cartSclice)
    -dispatch(action)
    -Selector
 -->
