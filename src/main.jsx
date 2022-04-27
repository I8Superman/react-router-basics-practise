import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent route with child routes */}
        <Route path="/" element={<App />} >
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            {/* Index routes render in the parent routes outlet at the parent route's path.
                Index routes match when a parent route matches but none of the other children match.
                Index routes are the default child route for a parent route.
                Index routes render when the user hasn't clicked one of the items in a navigation list yet. */}
            <Route index element={<h4>Please select an invoice</h4>} />
            <Route path=":invoiceNum" element={<Invoice />} />
          </Route>
          {/* The '*' path is a catch all that will only match when no other routes do */}
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
