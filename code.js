function makeTable(array, tableID) {
    document.write(`<table id="${tableID}">`)
    for (i in array) {
        document.getElementById(`${tableID}`).innerHTML += `<tr id="tr${i}">`;
        for (x in array[i]) {
            document.getElementById(`tr${i}`).innerHTML +=
                `<td id="td${i}_${x}">${array[i][x]}</td>`;
        };
        document.getElementById(`${tableID}`).innerHTML += `</tr>`;
    };
    document.write(`</table>`)
};