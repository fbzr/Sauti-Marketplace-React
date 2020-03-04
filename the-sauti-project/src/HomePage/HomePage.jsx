import React from "react";
import { Link } from "react-route-dom";
import { connect } from "react-redux";

import { actionUser } from "../actions";

class HomePage extends React.Component{
    componentDidMount(){
        this.props.getUsers()
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render(){
        const { user, users } = this.props;
        return(
            <div>
                <h1>hi {user.firstName}!</h1>
                <p> Your're logged in</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span>ERROR: {users.error}</span>}
                {users.items && 
                <ul>
                    {users.items.map((user, index) => 
                    <li key={user.id}>
                        {user.firstName + " " + user.lastName}
                        {
                            user,deleting ? <em> - Deleting ...</em>
                            :user.deleteError ? <span> - ERROR : {user.deleteError}</span>
                            : <span> = <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                        }

                    </li>
                    )}
                </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionUserCreators = {
    getUsers: actionUser.getAll,
    deleteUser: actionUser.delete
}

const connectHomePage = connect(mapState, actionUserCreators)(HomePage);
export { connectHomePage as HomePage };