import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { actionUser } from "../actions";





class Register extends React.Component {
    constructor(props) {
        super(props)
        

        this.state = {
            user: {
              
                userName:"",
                password: ""
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true});

        const { user } = this.state;

        if(user.userName && user.password ) {
            this.props.register(user)
        }
    }

    render(){
        const { registering } = this.props;
        const { user, submitted = this.state} = this.state;

        return(
                <div>
                    <h2>Register</h2>
                    <form onSubmit={this.handleSubmit}>
                    
                        <div className={ "form-group" + ( submitted && !user.userName? "has error" : '')}>
                            <label htmlFor="username"> username</label>
                            <input
                            id="userName"
                            type="text" 
                            name="userName"
                            className="form-control"
                            value={user.userName}
                            onChange={this.handleChange}
                            />
                            { submitted && !user.userName &&
                            <div> Username is Required</div> 
                            }
                        </div>
                        <div className={ " form-group " + ( submitted && !user.password ? " has error" : '')}>
                            <label htmlFor="password"> password</label>
                            <input
                            id="password"
                            type="password" 
                            name="password"
                            className="form-control"
                            value={user.password}
                            onChange={this.handleChange}
                            />
                            { submitted && !user.password &&
                            <div> password is Required</div> 
                            }
                        </div>
                        <div>
                            <button>Submit</button>
                           {registering}
                        <Link to="/login"> Cancel</Link>
                        </div>
                    </form>
                </div>

        )
    }
    
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering }
}

const actionCreator = {
    register: actionUser.register
}

const connectedRegister = connect(mapState, actionCreator)(Register)
export { connectedRegister as Register}