function button ({text, onClick}){
  return(
    <button className="btn-true p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100" onClick={onClick}>
      {text}
    </button>
  )
}

export default button;
