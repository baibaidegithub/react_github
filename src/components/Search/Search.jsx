import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        console.log(this.input1.value)
        this.props.updateState({isLoading:true,isFirst:false})
        axios.get(`http://localhost:3000/api1/search/users?q=${this.input1.value}`).then(
            response => {
                this.props.updateState({ users: response.data.items, isLoading: false })
                console.log(response.data.items)
            },
            error => {
                this.props.updateState({err:error.message,isLoading:false})
            },
        )
    }
    render() {
        return (

            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(currentNode) => { this.input1 = currentNode }} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>

                </div>
            </section>

        )
    }
}
