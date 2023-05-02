export const HandleDescending = (key, setSearchvalue, data) => {
    if (key === "id") {
        const numDescending = [...data].sort((a, b) => b.id - a.id);
        console.log(numDescending);
        setSearchvalue(numDescending);
    } else {
        const strDescending = [...data].sort((a, b) => (a[key] > b[key] ? -1 : 1));
        setSearchvalue(strDescending);
    }
};

export const HandleAscending = (key, setSearchvalue, data) => {
    if (key === "id") {
        const numAscending = [...data].sort((a, b) => a.id - b.id);
        setSearchvalue(numAscending);
    } else {
        const strAscending = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
        setSearchvalue(strAscending);
    }
};

export const RequestSearch = (
    searchedVal: string,
    filterKey,
    currentRecords,
    setSearchvalue
) => {
    const filteredRows = currentRecords.filter((row) =>
        row[filterKey]
            .toString()
            .toLowerCase()
            .includes(searchedVal.toString().toLowerCase())
    );

    if (searchedVal.length < 1) {
        setSearchvalue(currentRecords);
    } else {
        setSearchvalue(filteredRows);
    }
};
