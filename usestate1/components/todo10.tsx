
const Todo10 = () => {

    const onChangeHandle = (e) => {
        console.log(e.target.value);
        
    }

    return (
        <div>

                <input type={"text"} onChange={(e)=>onChangeHandle(e)} />
        </div>
    )
}


export default Todo10