import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class Customers extends Component {

  selector = React.createRef();

  state = {
    customers: [],
    status: false,
    cliente: {},
    status1: false
  }

  cargarCustomers = () => {
    var request = "/customers.json";
    var url = Global.urlCustomers + request;
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({
        customers: response.data.results,
        status: true,

      });
    });

  }

  filtrarCliente = (e) => {
    e.preventDefault();
    var idCliente = this.selector.current.value;
    var request = "/customers/" + idCliente + ".json";
    var url = Global.urlCustomers + request;
    console.log(url);
    axios.get(url).then(response => {
      console.log(response.data.customer);
      this.setState({
        cliente: response.data.customer,
        status1: true
      })
    })
  }

  componentDidMount = () => {
    this.cargarCustomers();
  }

  render() {
    return (
      <div>
        <h1>Customer</h1>
        <form>
          <select ref={this.selector} onChange={this.filtrarCliente}>
            {
              this.state.customers.map((clientes, index) => {
                return (<option value={clientes.id} key={index}>{clientes.contactName}</option>)
              })
            }
          </select>
        </form>
        <table>
          <thead>
            <th>Id</th>
            <th>TT</th>
          </thead>
          <tbody>
            {
              this.state.cliente.map((clnt, index) => {
                return (
                  <td>{clnt.id}</td>
                )
              })
            }
          </tbody>
        </table>



      </div>
    )
  }
}
