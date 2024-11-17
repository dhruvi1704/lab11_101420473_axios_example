import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonList.css';
class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=2')
            .then(response => response.json())
            .then(data => {
                const persons = data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h1 className="header">User List</h1>
                {this.state.persons.map((person, index) => (
                    <div className="card user-card" key={index}>
                        <div className="card-content">
                            {/* Left Side */}
                            <div className="user-left">
                                <img
                                    src={person.picture.large}
                                    alt={`${person.name.first} ${person.name.last}`}
                                    className="user-image"
                                />
                                <button className="details-button">Details</button>
                            </div>

                            {/* Right Side */}
                            <div className="user-info">
                                <h5 className="user-name">
                                    {person.name.title} {person.name.first} {person.name.last}
                                </h5>
                                <p className="info">
                                    <strong>Gender:</strong> {person.gender} <br />
                                    <strong>Time Zone:</strong> {person.location.timezone.description} <br />
                                    <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode} <br />
                                    <strong>Email:</strong> {person.email} <br />
                                    <strong>Phone:</strong> {person.phone} <br />
                                    <strong>Cell:</strong> {person.cell} <br />
                                    <strong>Birth Date:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age} years) <br />
                                    <strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()} <br />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
