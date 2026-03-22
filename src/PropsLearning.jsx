import PropTypes from "prop-types";

function PropsLearning(props){
    return (

        <div>
        <h1>Name is : {props.name}</h1>
        <p>Age is: {props.age}</p>
        
        </div>
    );

}

PropsLearning.prototype = {

    name: PropTypes.string,
    age: PropTypes.number   
}


export default PropsLearning;