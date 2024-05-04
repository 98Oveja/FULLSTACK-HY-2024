

const Content =(props)=>{
    console.log(props.course.parts);
    const [first, second, third] = props.course.parts;


    return (
        <>
           <p>{first.name} {first.exercises}</p>
           <p>{second.name} {second.exercises}</p>
           <p>{third.name} {third.exercises}</p>
        </>
    )
}

export default Content