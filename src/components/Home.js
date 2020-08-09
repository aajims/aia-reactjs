import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            Fotos: [],
            info : 'Gallery Foto'
        }
    }
    componentDidMount () {
        axios.get('http://localhost:3001/')
        .then(res => {
            const Fotos = res.data
            this.setState({ Fotos })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>{ this.state.info }</h2>
                </div>
                <div className="body-gallery">
                    <div className="row">
                    {this.state.Fotos.map(row => (
                        <div className="col-6">
                            <div className="list-foto">
                                <a href={ row.link[0].href } target="_blank">
                                    <h4>{ row.title } </h4>
                                    <img className="img-foto" src={ row.link[1].href } alt="img" />
                                </a>
                            </div>
                        </div>
                     ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;