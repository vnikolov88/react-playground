type Pagination = {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (numer: number) => void
};

const Pagination = ({ totalPages, currentPage, setCurrentPage }: Pagination) => {

    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div className="btn-group flex justify-end">
            <button className="btn" onClick={prevPage}>«</button>
            {pageNumbers.map(pgNumber => (
                <button key={pgNumber} onClick={() => setCurrentPage(pgNumber)}

                    className={`btn ${currentPage == pgNumber ? 'btn-active' : ''} `}>{pgNumber}</button>

            ))}
            <button className="btn" onClick={nextPage}>»</button>

        </div>
    )
}

export default Pagination