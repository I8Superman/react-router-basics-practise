import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getSpecificInvoice, deleteInvoice } from "../data";

export default function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();

    // We use parseInt to turn the URL param (always a string) into a number - as the numbers of the invoices in the data are numbers, not strings:
    let invoice = getSpecificInvoice(parseInt(params.invoiceNum), 10);

    return (
        <div className="invoiceContainer">
            <h2>Invoice: {params.invoiceNum}</h2>
            <h3>{invoice.name}</h3>
            <h4>Number: {invoice.number}</h4>
            <p>Amount: {invoice.amount}</p>
            <p>Due date: {invoice.due}</p>
            <button onClick={() => {
                deleteInvoice(invoice.number);
                console.log(location.search);
                navigate("/invoices" + location.search); // This will take us to the list with the invoice now removed/deleted, with the same search params as previously entered
            }}>
                Pay invoice and delete
            </button>
        </div>
    );
}