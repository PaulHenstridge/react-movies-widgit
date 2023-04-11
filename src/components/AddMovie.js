const AddMovie = ({ onAddMovie }) => {

    const handleAddMovie = (e) => {
        e.preventDefault()
        const newMovie = e.target[0].value
        onAddMovie(newMovie)
        e.target.reset()
    }

    return (
        <form onSubmit={handleAddMovie}>
            <input type="text" placeholder="Enter new movie title" />
            <button>Add Movie</button>

        </form>

    );
}

export default AddMovie;