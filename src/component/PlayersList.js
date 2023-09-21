import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlayersList() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/players'; 

        axios.get(apiUrl)
            .then(response => {
                setPlayers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching players data: ", error);
                setLoading(false);
            });
    }, []);  // The empty array means this useEffect runs once when component mounts

    return (
        <div>
            {loading ? (
                <p>Loading players...</p>
            ) : (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>GP</th>
                            <th>Position</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Points</th>
                            <th>Avg</th>
                            <th>PIM</th>
                            {/* Add more columns as required */}
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.playerId}>
                                <td>{player.playerName}</td>
                                <td>{player.gamesPlayedNum}</td>
                                <td>{player.position}</td>
                                <td>{player.numGoals}</td>
                                <td>{player.numAssists}</td>
                                <td>{player.numPoints}</td>
                                <td>{player.numPoints / player.gamesPlayedNum}</td>
                                <td>{player.numPim}</td>
                                {/* Add more cells as required */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PlayersList;