import {calculateInvestmentResults,formatter} from '../investment.js'
export default function Results({input}) {
    const resultsData=calculateInvestmentResults(input)
    const initialInvestment= resultsData[0].valueEndOfYear-resultsData[0].interest-resultsData[0].annualInvestment
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year wise)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {resultsData.map((yeardata)=>{
                    const totalInterest = yeardata.valueEndOfYear - yeardata.year * yeardata.annualInvestment - initialInvestment
                    const totalAmountInvested=yeardata.valueEndOfYear-totalInterest
                    return(
                        <tr key={yeardata.year}>
                            <td>{yeardata.year}</td>
                            <td>{formatter.format(yeardata.valueEndOfYear)}</td>
                            <td>{formatter.format(yeardata.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
    
}