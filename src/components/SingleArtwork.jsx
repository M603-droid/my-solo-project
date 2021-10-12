import { Card } from 'react-bootstrap'
import { Component } from 'react'

class SingleBook extends Component {

    state = {
        selected: false
    }
    render() {
        return (
            <>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div>

                        <Card
                            key={this.artwork.Title}
                            className='mt-5 m-3'
                            onClick={() => { this.setState({ selected: !this.state.selected }) }}
                            style={{ width: '18rem', border: this.state.selected ? '3px solid green' : 'none' }}
                        >
                           {/* <Card.Img variant="top" src={this.props.data.title /> */} 
                            <Card.Body>
                                <Card.Title>{this.props.data.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        {this.state.selected && <PageDetails id={this.props.data.id} />}

                    </div>
                </div>
            </>
        )
    }

}

export default SingleBook;