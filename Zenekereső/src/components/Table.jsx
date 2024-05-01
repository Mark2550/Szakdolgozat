import { useState } from "react";
import data from "../data/Track-data.json";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Table.css"

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

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [search, setSearch] = useState('');


    return (
        <div className="shadow-md sm:rounded-lg">

            <form
                className="max-w-md mx-auto"
                action="search"
                onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search "
                        required
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <Stack spacing={2}>
                <Pagination
                    count={npage}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>

            <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headers.map(header => (
                            <th
                                key={header}
                                scope="col"
                                className="px-6 py-3 text-sm font-semibold font-serif text-slate-400"
                                onClick={() => handleSortClick(header)
                                }
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

            <Stack spacing={2}>
                <Pagination
                    count={npage}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>

        </div>
    )
}

export default Table