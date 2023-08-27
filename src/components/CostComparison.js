
import React, { useState } from 'react';
import '../App.css';

const CostComparison = () => {
    const [carCost, setCarCost] = useState({
        fuelCost: 0,
        maintenance: 0,
        insurance: 0,
        parking: 0,
    });

    const [publicTransportCost, setPublicTransportCost] = useState({
        fares: 0,
    });

    const calculateCost = (cost) => {
        return Object.values(cost).reduce((a, b) => a + b, 0);
    };

    const handleCarCostChange = (e) => {
        setCarCost({
            ...carCost,
            [e.target.name]: parseFloat(e.target.value),
        });
    };

    const handlePublicTransportCostChange = (e) => {
        setPublicTransportCost({
            ...publicTransportCost,
            [e.target.name]: parseFloat(e.target.value),
        });
    };

    return (
        <div>
            <div className="input-group">
                <h2>Car Costs</h2>
                <input
                    type="number"
                    name="fuelCost"
                    placeholder="Fuel Costs"
                    onChange={handleCarCostChange}
                    className="input-field"
                />
                <input
                    type="number"
                    name="maintenance"
                    placeholder="Maintenance Costs"
                    onChange={handleCarCostChange}
                    className="input-field"
                />
                <input
                    type="number"
                    name="insurance"
                    placeholder="Insurance Premiums"
                    onChange={handleCarCostChange}
                    className="input-field"
                />
                <input
                    type="number"
                    name="parking"
                    placeholder="Parking Fees"
                    onChange={handleCarCostChange}
                    className="input-field"
                />
            </div>

            <div className="input-group">
                <h2>Public Transport Costs</h2>
                <input
                    type="number"
                    name="fares"
                    placeholder="Fares"
                    onChange={handlePublicTransportCostChange}
                    className="input-field"
                />
            </div>

            <div className="result">
                <p>
                    Total Car Costs: <span className="result-text">{calculateCost(carCost)}</span>
                </p>
                <p>
                    Total Public Transport Costs: <span className="result-text">{calculateCost(publicTransportCost)}</span>
                </p>
            </div>
        </div>
    );
};

export default CostComparison;