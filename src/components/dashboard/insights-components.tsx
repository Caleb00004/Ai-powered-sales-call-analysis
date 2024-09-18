import { globalState } from "../../../api-feature/apiSlice"
import InsightsManager from "./manager/insights-manager"
import InsightSalesrep from "./sales-rep/insights-salesrep"

export const skillsData = [
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "BO", name: "Becoming Obsessed", score: 20}, 
    {short: "BV", name: "Building Value", score: 60},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
    {short: "C", name: "Conviction", score: 80},
    {short: "VP", name: "Value Presentation", score: 90},
]

const InsightsComponent = () => {
    const {account_type} = globalState

    return (
        <div>
            {account_type === "manager" && <InsightsManager />}
            {account_type === "sales-rep" && <InsightSalesrep />}
        </div>
    )   
}

export default InsightsComponent