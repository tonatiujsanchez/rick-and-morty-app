
export const getResidentsPerPage = (redidents=[], page=1) => {
    const count = 8

    const start = (page - 1) * count
    const end = start + count

    return {
        currentPage: page,
        totalPages: Math.ceil( redidents.length / count ),
        data: redidents.slice( start, end )
    }
}
