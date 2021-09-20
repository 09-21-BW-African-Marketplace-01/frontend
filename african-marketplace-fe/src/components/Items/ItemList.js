import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../actions'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './columns'
import GlobalFilter from './GlobalFilter'



const ItemList = (props) => {
    const{items, isFetching, error, fetchItems} = props

    useEffect(() => {
        fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    //this ensures the data isnt recreated on every render, 
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => items, [items])


    const {
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        canNextPage,
        previousPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
    },useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex } = state


    if(isFetching){
        return <h3>Fetching data...</h3>
    }

    
    
    
    return (
        <>
            {
                error && <div>Error: {error}</div>
            }
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()} style={{textAlign: 'center'}}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                            headerGroup.headers.map(columns => (
                                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>{columns.render('Header')}
                                <span>
                                    {
                                        columns.isSorted ? (columns.isSortedDesc ? ' v' : ' ^') : ''
                                    }
                                </span>
                                </th>
                            ))
                            }
                        </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1 } of {pageOptions.length}
                    </strong> {' '}
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previos</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return({
        items: state.items,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, {fetchItems})(ItemList)
