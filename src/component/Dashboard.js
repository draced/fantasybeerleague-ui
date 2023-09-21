import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create League</h5>
                            <p className="card-text">Start a new fantasy hockey league with friends.</p>
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">My Teams</h5>
                            <p className="card-text">View and manage your fantasy hockey teams.</p>
                            <Link to="/my-teams" className="btn btn-primary">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;