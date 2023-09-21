import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MyTeams = () => {
    const [teams, setTeams] = useState([]);

    // This useEffect should fetch the user's teams.
    // Replace the URL with your API endpoint.
    useEffect(() => {
        fetch('http://localhost:8080/api/teams')
        .then(response => response.json())
        .then(data => {
            setTeams(data);
        });
    }, []);

    return (
        <div className="container mt-5">
            <h2>My Teams</h2>
            <div className="row">
                {teams.map(team => (
                    <div key={team.teamId} className="col-md-4">
                        <Link to={`/team-detail/${team.teamId}`} className="text-decoration-none">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{team.teamName}</h5>
                                    <p className="card-text">{team.cityName}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyTeams;