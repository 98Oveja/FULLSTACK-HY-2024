


const Total=(props)=>{
    console.log(props.course.parts);
    const [first, second, third] = props.course.parts;

    return <p>Number of exercises {first.exercises+second.exercises+third.exercises}</p>
}

export default Total