### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Allows different routes to be displayed on the same page without re-rendering everything. It allows users to route to a specific part of the website without leaving the main app.

- What is a single page application?
An application that displays all routes from a single render. 

- What are some differences between client side and server side routing?
Server side routing treats every route as a new URL,whereas client side routing holds routes on the same page. Client side also allows easy navigation back and forward without losing data.

- What are two ways of handling redirects with React Router? When would you use each?
1. Redirect from a specific route -use when a page is temporarily unavailable or not accessible
2. use a catch-all that redirects to a single route - use for typos in path name or confused users.


- What are two different ways to handle page-not-found user experiences using React Router? 
  1. re-route using redirect component
  2. use history with history.push(route)

- How do you grab URL parameters from within a component using React Router?
  There is a hook called "useParams" that collects the parameters from url. Within the component, you can call this hook and destructure it into an object that contains all user parameters.

- What is context in React? When would you use it?
  context is a single data point that holds its value through all generations. It can be used in any child or grandchild component without passing from a parent. You would use it when the use of state skips a generation, or when you want interactive functionality on multiple levels.

- Describe some differences between class-based components and function
  components in React.
  classes cannot use hooks outright, uses "this" keyword instead. generally there are a lot less conveniences attached to class components. Function components return their component, while class components have a special "render" method that returns the component

- What are some of the problems that hooks were designed to solve?
  Hooks allow for lifecycle changes of components more easily. in class based components, you are limited to certain methods, but hooks allow custom changes at custom points during a components lifecycle