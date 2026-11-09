function Box({value, onSquareClick}){
    function handlecontextmenu(event){
        event.preventdefault()
        onSquareClick('right')
    }

    return(
        <button>
            {value}
        </button>
    )
    
}
export default Box