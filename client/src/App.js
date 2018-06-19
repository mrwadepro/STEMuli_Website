import React, {Component} from 'react';
import gql from "graphql-tag";
import {graphql, compose} from 'react-apollo';

const UserQuery = gql`
  {
    users {
      id
      name
      complete
    }
  }
`;

const AddUserMutation =gql `mutation($name: String, $password: String, $email: String){
  createUser(name: $name, $password: $password, email: $password)
}`;
 class App extends Component {
   addUser = async users =>{
    await this.props.addUser({
       variables:{
         name: users.name,
         password: users.password,
         email: users.email

       }
     })
   };
render() {
  const {data: {loading, users}} = this.props;
  if(loading){return null;}
return <div>{users.map(user=> (<div key={user.id}>{user.name}</div>))}</div>;
}


}
export default compose(
  graphql(AddUserMutation, {name:"addUser"}),
  graphql(UserQuery))(App);
