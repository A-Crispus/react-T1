# react-T1
PROPS
The props property of a React component is an input passed to a component.
It allows the parent component to pass data or functionality similar to fuction arguments.
Props are read-only, meaning they cannot be changed(immutable). 
A component can receive zero or more props from 
its parent and return one single output (a react 
element) in its render method.




STATE
State is an object that belongs to a component and
is used to store the current state of the data managed by a
component. It is initialized by the constructor of
class components and set by calling this.setState
method. The state is also immutable just 
like props. Changes made to the state 
using this.state = {} will not affect the
current state. To update the state you need to
use this.setState(). Whenever the state 
changes, the Ui will re-render 
automatically with the new state.it can be seen to be also mutable coz it changes accoring to the user actions
automatically with the new state.


