import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getInvoices } from '../data';

export default function Invoices() {
    let invoices = getInvoices();

    let [searchParams, setSearchParams] = useSearchParams();

    function ModifiedNavLink({ to, ...props }) { // This is a component (used below) that modifies and keps the current search params after rendering
        let location = useLocation();
        return <NavLink to={to + location.search} {...props} />;
    }

    return (
        <main>
            <h2>Invoices</h2>
            <nav>
                <input value={searchParams.get("filter") || ""} onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }} />
                {invoices
                    .filter((invoice) => {
                        let filter = searchParams.get("filter"); // Check if there's a key called 'filter' and get its value
                        if (!filter) return true; // IF no filter, all invoices are returned (no filtering takes place)
                        let name = invoice.name.toLowerCase(); // get the invoice.name in lowercase
                        return name.includes(filter.toLowerCase()); // return the invoice if 'name' includes filter value. .includes is better than .startsWith, as it lets you search with any part of the name.
                    })
                    .map((invoice) => (
                        // Whoa! You can make a special component that transforms into a modified element based on the props you send to it!?
                        <ModifiedNavLink style={({ isActive }) => { // Inline styling of active links. How to do so in stylesheet??
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} to={`/invoices/${invoice.number}`} key={invoice.number}>
                            {invoice.name}
                        </ModifiedNavLink>
                    )
                    )
                }
            </nav>
            <Outlet />
        </main>
    );
}