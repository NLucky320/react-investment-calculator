import React from 'react';
import { calculateInvestmentResults} from '../util/investment.js';

const Results = ({input}) => {
    const resultData = calculateInvestmentResults(input);
    console.log(resultData);

    return (
        <div>
            results
        </div>
    );
};

export default Results;