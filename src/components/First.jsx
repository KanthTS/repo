
import './First.css';

function First()
{
    let a=10;
    let user="kanth";
    let s={
        id:1,
        name:"kanth"
    }
    let arr=[10,20,45,25,30];
    return(
        
        <div className="ka">
            <h1 className="text-primary">value of a is{a}</h1>
            <h2>user name is{user}</h2>
            <h3>{s.id}</h3>
            <h4>{s.name}</h4>
            {
                arr.map((m,index)=><h2 key={index}>{m}</h2>)
            }
           <img src="data:image/jpeg;base64,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"></img>
            <img src={'image'}></img>
        </div>
    )
}
export default First;