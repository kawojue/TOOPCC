const sortByDates = (array: any[]) => {
    return array.sort((a, b) => {
        const dateA: any = new Date(a.date)
        const dateB: any = new Date(b.date)

        return dateA - dateB;
    })
}

const sortByCardNumbers = (array: any[]) => {
    return array.sort((a, b) => {
        const numA = parseInt(a.card_no, 10)
        const numB = parseInt(b.card_no, 10)

        if (numA < numB) {
            return -1
        } else if (numA > numB) {
            return 1
        }

        const alphaA = String(a).replace(/[^a-zA-Z]/g, "")
        const alphaB = String(b).replace(/[^a-zA-Z]/g, "")

        return alphaA.localeCompare(alphaB)
    })
}

export { sortByCardNumbers, sortByDates }