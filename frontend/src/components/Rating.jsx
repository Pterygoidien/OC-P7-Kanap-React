const Rating = ({ value }) => {


    for (let i = 0; i < 5; i++) {
        if (i <= value) {
            return <i className="fas fa-star"></i>
        } else {
            return <i className="far fa-star"></i>
        }
    }
}