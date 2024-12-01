import React, { useState } from "react";
import './Home.css';
import HorizontalScroll from "./HorizontalScroll";

const Home = () => {

  const sampleData = [
    {
      SOURCE: "iBankNet",
      CUSTOMER_NAME: "Rajat Dhage",
      TOTAL_ASSETS: "$500,000",
      INDUSTRY_TYPE: "Credit Union",
      ADDRESS: "123 Elm Street",
      CITY: "New York",
    },
    {
      SOURCE: "Others",
      CUSTOMER_NAME: "Jane Smith",
      TOTAL_ASSETS: "$1,200,000",
      INDUSTRY_TYPE: "Bank",
      ADDRESS: "456 Oak Avenue",
      CITY: "San Francisco",
    },
    {
      SOURCE: "iBankNet",
      CUSTOMER_NAME: "James Brown",
      TOTAL_ASSETS: "$800,000",
      INDUSTRY_TYPE: "Credit Union",
      ADDRESS: "789 Pine Road",
      CITY: "Chicago",
    },
    {
      SOURCE: "Others",
      CUSTOMER_NAME: "Emily White",
      TOTAL_ASSETS: "$900,000",
      INDUSTRY_TYPE: "Bank",
      ADDRESS: "101 Maple Lane",
      CITY: "Boston",
    },
    {
      SOURCE: "iBankNet",
      CUSTOMER_NAME: "Michael Green",
      TOTAL_ASSETS: "$700,000",
      INDUSTRY_TYPE: "Credit Union",
      ADDRESS: "202 Birch Blvd",
      CITY: "Seattle",
    },
    {
      SOURCE: "Others",
      CUSTOMER_NAME: "Sarah Black",
      TOTAL_ASSETS: "$600,000",
      INDUSTRY_TYPE: "Bank",
      ADDRESS: "303 Cedar Drive",
      CITY: "Austin",
    },
    {
      SOURCE: "iBankNet",
      CUSTOMER_NAME: "Robert Gray",
      TOTAL_ASSETS: "$400,000",
      INDUSTRY_TYPE: "Credit Union",
      ADDRESS: "404 Aspen Court",
      CITY: "Denver",
    },
    {
      SOURCE: "Others",
      CUSTOMER_NAME: "Laura Blue",
      TOTAL_ASSETS: "$1,000,000",
      INDUSTRY_TYPE: "Bank",
      ADDRESS: "505 Willow Way",
      CITY: "Los Angeles",
    },
    {
      SOURCE: "iBankNet",
      CUSTOMER_NAME: "Daniel Gold",
      TOTAL_ASSETS: "$550,000",
      INDUSTRY_TYPE: "Credit Union",
      ADDRESS: "606 Cherry Circle",
      CITY: "Houston",
    },
    {
      SOURCE: "Others",
      CUSTOMER_NAME: "Sophia Silver",
      TOTAL_ASSETS: "$750,000",
      INDUSTRY_TYPE: "Bank",
      ADDRESS: "707 Redwood Terrace",
      CITY: "Miami",
    },
  ];
  
  const [filters, setFilters] = useState({
    customerName: "",
    address: "",
    certificateNumber: "",
    source: "all",
    industryType: "all",
  });
  const [data, setData] = useState(sampleData);
  const [isLoading, setIsLoading] = useState(false);

  // Update filters based on input
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Fetch data based on filters
  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-display">
      {/* Header */}
      <h3 id="heading">
        SMART RESEARCH PORTAL 🔵
        <label className="company-name">Wolters Kluwer</label>
      </h3>

      {/* Search Filters Section */}
      <div className="filter-section">
        {/* CUSTOMER_NAME Filter */}
        <div className="filter-card">
          <label>CUSTOMER_NAME</label>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              name="customerName"
              value={filters.customerName}
              onChange={handleFilterChange}
            />
            <span className="search-icon" onClick={handleSearch}>
              🔍
            </span>
          </div>
        </div>

        {/* ADDRESS Filter */}
        <div className="filter-card">
          <label>ADDRESS</label>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              name="address"
              value={filters.address}
              onChange={handleFilterChange}
            />
            <span className="search-icon" onClick={handleSearch}>
              🔍
            </span>
          </div>
        </div>

        {/* CERTIFICATE_NUMBER Filter */}
        <div className="filter-card">
          <label>CERTIFICATE_NUMBER</label>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              name="certificateNumber"
              value={filters.certificateNumber}
              onChange={handleFilterChange}
            />
            <span className="search-icon" onClick={handleSearch}>
              🔍
            </span>
          </div>
        </div>

        {/* Source Filter */}
        <div className="filter-card">
          <label>Source</label>
          <select
            name="source"
            value={filters.source}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="iBankNet">iBankNet</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* INDUSTRY_TYPE Filter */}
        <div className="filter-card">
          <label>INDUSTRY_TYPE</label>
          <select
            name="industryType"
            value={filters.industryType}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="Credit Union">Credit Union</option>
            <option value="Bank">Bank</option>
          </select>
        </div>
      </div>

      {/* Data Tabs Section */}
      <div className="data-tabs">
        <button className="data-tab" onClick={() => console.log("Tab Clicked")}>
          COMBINED_DATA
        </button>
        <button className="data-tab" onClick={() => console.log("Tab Clicked")}>
          SNP_GLOBAL_DATA
        </button>
        <button className="data-tab" onClick={() => console.log("Tab Clicked")}>
          DNB_DATA
        </button>
        <div className="icons-section">
          <span className="icon">📊</span>
          <span className="icon">📁</span>
          <span className="icon">⚙️</span>
        </div>
      </div>

      {/* Table Display Section */}
      
      
      <HorizontalScroll isLoading={isLoading} data={data}/>
    </div>
  );
};

export default Home;
