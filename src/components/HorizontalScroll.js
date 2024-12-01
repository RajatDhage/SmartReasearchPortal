import React from "react";
import './HorizontalScroll.css'

const HorizontalScroll = ({isLoading, data}) => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
      <div className="table-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>SOURCE</th>
                <th>CUSTOMER_NAME</th>
                <th>TOTAL_ASSETS</th>
                <th>INDUSTRY_TYPE</th>
                <th>INDUSTRY_TYPE</th>
                <th>INDUSTRY_TYPE</th>
                <th>INDUSTRY_TYPE</th>
                <th>INDUSTRY_TYPE</th>
                <th>INDUSTRY_TYPE</th>
                <th>ADDRESS</th>
                <th>CITY</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.SOURCE}</td>
                  <td>{row.CUSTOMER_NAME}</td>
                  <td>{row.TOTAL_ASSETS}</td>
                  <td>{row.INDUSTRY_TYPE}</td>
                  <td>{row.INDUSTRY_TYPE}</td>
                  <td>{row.INDUSTRY_TYPE}</td>
                  <td>{row.INDUSTRY_TYPE}</td>
                  <td>{row.ADDRESS}</td>
                  <td>{row.CITY}</td>
                  <td>{row.CITY}</td>
                  <td>{row.CITY}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </div>
    </div>
  )
};

export default HorizontalScroll;
