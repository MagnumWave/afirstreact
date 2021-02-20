import React from 'react';
import './Table.css';

class Table extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         show: false
    //     }
    // }

    // static getDerivedStateFromProps(props,state){
    //     return {show: props.show};
    // }

    render(){
        const myTable = (
            <table>
                <colgroup>
                    <col className="t-nome"></col>
                    <col className="t-mail"></col>
                    <col className="t-phone"></col>
                </colgroup>
                <thead className="font-weight-bold">
                    <tr>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Telefone</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>E.T.</td>
                        <td>minha.casa@marte.com</td>
                        <td>telefone!</td>
                    </tr>
                </tbody>
            </table>
        );

        if(this.props.show){
            return(
                <div className="table-container table-starter text-white d-flex text-center justify-content-center">
                    {myTable}
                </div>
            );
        } else {
            return(
                <div className="table-container table-ender text-white d-flex text-center justify-content-center">
                    {myTable}
                </div>
            );
        }
        
    }
}

export default Table;