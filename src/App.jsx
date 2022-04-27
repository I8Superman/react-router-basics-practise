import { Outlet, Link } from "react-router-dom";

import './App.css'

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/* As we have defined child routes for this component, the Outlet is a placeholder, where the current child route will be rendered. This lets us keep the parent component (App) as the main (page) layout while switching the child compoents by changing the route! */}
      <Outlet />
    </div>
  );
}
