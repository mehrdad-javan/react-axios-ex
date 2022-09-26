import React from 'react';

const DataTable = (props) => {


    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Title</th>
                </tr>
            </thead>
        )
    }

    const TableRow = () => {
        return (
            <tbody>
                {
                    props.persons.map(person => {
                        const row = (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.firstName} {person.lastName}</td>
                                <td>{person.title}</td>
                            </tr>
                        );
                        return row;
                    })
                }
            </tbody>
        );
    }

    return (
        <div className='container'>
            <table className='table table-dark'>
                <TableHeader />
                <TableRow />
            </table>
        </div>
    );
};

export default DataTable;