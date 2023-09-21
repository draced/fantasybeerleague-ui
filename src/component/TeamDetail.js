import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {
    const [teamData, setTeamData] = useState({});
    const [players, setPlayers] = useState([]);
    const { teamId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/teams/${teamId}?include=players`)
        .then(response => response.json())
        .then(data => {
            setTeamData(data);
            setPlayers(data.players);
        });
    }, [teamId]);

    return (
        <div className="container mt-5">
            <h2>{teamData.teamName}</h2>
            <h5>Players</h5>
            <ul>
                {players.map(player => (
                    <li key={player.playerId}>{player.playerName}</li>
                ))}
            </ul>
        </div>
    );
}

export default TeamDetail;