
const Search = ({searching,handleSearch}) => {
  
  return (
    <div>
        <form className='search'>
            <label className='Search1'> Search:</label>
            <div className='Search2'><input type="text" value={searching} onChange={e=>handleSearch(e.target.value)} /></div>
        </form>

    </div>
  )
}

export default Search