import { useState } from "react";
import data from "../data/Track-data.json";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Table = () => {

    const [page, setPage] = useState(1);
    const recordsPerPage = 15;
    const lastIndex = page * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const headers = [
        'Title',
        'Artist',
        'Album',
        'Release date',
        'Duration',
    ]

    const [sort, setSort] = useState({ keyToSort: 'header', direction: 'asc' });

    const handleChange = (e, value) => {
        setPage(value);
    }
    function handleSortClick(header) {
        setSort({
            keyToSort: header,
            direction:
                header === sort.keyToSort
                    ? sort.direction === 'asc'
                        ? 'desc'
                        : 'asc'
                    : 'desc',
        });
    }
    function getSortedArray(arrayToSort) {
        if (sort.direction === 'asc') {
            return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
        }
        return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

            <Stack spacing={2}>
                <Pagination
                    count={npage}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headers.map(header => (
                            <th
                                key={header}
                                scope="col"
                                className="px-6 py-3"
                                onClick={() => handleSortClick(header)}
                            >
                                {header} {sort.keyToSort === header && (sort.direction === 'asc' ? '▲' : '▼')}
                            </th>
                        ))
                        }
                    </tr>
                </thead>

                <tbody>

                    {getSortedArray(records).map((row, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            {headers.map((header, index) => {
                                return (
                                    <td key={index} className="px-6 py-4">
                                        {row[header]}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Table