document.querySelectorAll("table").forEach(table => {
    table.querySelectorAll("th").forEach(th => {
        th.addEventListener("click", function () {
            lazycssSortTable(table, this.cellIndex);
        });
    });
});

function lazycssSortTable(table, n)
{
    const rows = Array.from(table.tBodies[0].rows);
    const isAsc = table.dataset.column == n ? table.dataset.asc !== "true" : true;

    rows.sort((a, b) =>
    {
        const x = a.cells[n].textContent;
        const y = b.cells[n].textContent;

        const nx = x.replace(/,/g, "");
        const ny = y.replace(/,/g, "");

        if (!isNaN(nx) && !isNaN(ny))
        {
            return isAsc
                ? nx - ny
                : ny - nx;
        }

        return isAsc
            ? x.localeCompare(y)
            : y.localeCompare(x);
    });

    rows.forEach(row => table.tBodies[0].appendChild(row));

    const headers = table.querySelectorAll("th");

    headers.forEach(th =>
    {
        th.classList.remove("sort-asc", "sort-desc");
    });

    headers[n].classList.add(isAsc ? "sort-asc" : "sort-desc");

    table.dataset.column = n;
    table.dataset.asc = isAsc;
}