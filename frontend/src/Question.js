import React, {Component} from 'react';
import axios from 'axios';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
        };
    }

    async componentDidMount() {
        // console.log(this.props)
        // console.log("pathname is", this.props.location.pathname)
        const uri = "http://localhost:8081" + this.props.location.pathname
        // console.log("uri is:", uri)
        const q = (await axios.get(uri)).data;
        this.setState({
            question: q,
        });
    }

    render() {
        const {question} = this.state;
        if (question === null) return <p>Loading...</p>;
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{question.title}</h1>
                        <p className="lead">{question.description}</p>
                        <hr className="my-4" />
                        <p>Answers:</p>
                        {
                        question.answers.map((answer, idx) => (
                            <p className="lead" key={idx}>{answer.answer}</p>
                        ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;