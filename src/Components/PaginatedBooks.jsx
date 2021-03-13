import React, { PureComponent } from 'react';

class PaginatedBooks extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            about: ""
        };
    }
    componentDidMount() {
        this.setState({
            
        })
    }
    render() {
        return (

            <div className="row card">
                <div className="col-md-12">
                    <h3>About the Property</h3>
                   
                </div>

            </div>

        );
    }
}

export default PaginatedBooks;