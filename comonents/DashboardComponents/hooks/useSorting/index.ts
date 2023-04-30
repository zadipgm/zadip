import userInfo from 'DataLayer/dataTable.json'
export const HandleDescending = (key, setSearchvalue) => {
    if (key === "id") {
        const numDescending = [...userInfo.data].sort((a, b) => b.id - a.id);
        console.log(numDescending);
        setSearchvalue(numDescending);
    } else {
        const strDescending = [...userInfo.data].sort((a, b) =>
            a[key] > b[key] ? -1 : 1
        );
        setSearchvalue(strDescending);
    }
};

export const HandleAscending = (key, setSearchvalue) => {
    console.log('here is userInfo', userInfo);
    if (key === "id") {
        const numAscending = [...userInfo.data].sort((a, b) => a.id - b.id);
        console.log("Ascending search", numAscending);
        setSearchvalue(numAscending);
    } else {
        const strAscending = [...userInfo.data].sort((a, b) =>
            a[key] > b[key] ? 1 : -1
        );
        setSearchvalue(strAscending);
    }
};

export const RequestSearch = (searchedVal: string, filterKey, currentRecords, setSearchvalue) => {
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