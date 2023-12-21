import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
const Tables = ({ data }) => {
  const [filters, setFilters] = useState({
    location:'',
    term: '',
    radius: '',
    sort_by: '',
    device_platform: '',
    reservation_covers:''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredData = data.filter(item => {
    return (
      item.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      item.term.toLowerCase().includes(filters.term.toLowerCase()) &&
      item.sort_by.toLowerCase().includes(filters.sort_by.toLowerCase())&&
      item.device_platform.toLowerCase().includes(filters.device_platform.toLowerCase()) &&
      (filters.radius === '' || item.radius <= parseInt(filters.radius))&&
      (filters.reservation_covers === '' || item.reservation_covers <= parseInt(filters.reservation_covers))  
      &&
      (searchTerm === '' ||
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ))
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const pageCount = Math.ceil(filteredData.length / pageSize);
  const handleFilterChange = (filterKey, value) => {
    setFilters({
      ...filters,
      [filterKey]: value,
    });
    setCurrentPage(1); // Reset halaman ke halaman pertama saat filter berubah
  };
  return (
    <div>
      <div style={{width:750}}>
      <Table borderless >
      <tbody>
        <tr>
          <td>Filter All condition</td>
          <td ><input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}/>
          </td> 
        </tr>
        <tr>
          <td>Filter Location</td>
          <td> <input
          type="text"
          value={filters.location}
          onChange={e => handleFilterChange('location', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>Term</td>
          <td ><input
          type="text"
          value={filters.term}
          onChange={e => handleFilterChange('term', e.target.value)}/></td>
        </tr>
        <tr>
          <td>Radius</td>
          <td ><input
          type="text"
          value={filters.radius}
          onChange={e => handleFilterChange('radius', e.target.value)}/></td>
        </tr>
        <tr>
          <td>Sort By</td>
          <td ><input
          type="text"
          value={filters.sort_by}
          onChange={e => handleFilterChange('sort_by', e.target.value)}/></td>
        </tr>
        <tr>
          <td>Device Platform</td>
          <td ><input
          type="text"
          value={filters.device_platform}
          onChange={e => handleFilterChange('device_platform', e.target.value)}/></td>
        </tr>
        <tr>
          <td>Reservation covers</td>
          <td ><input
          type="text"
          value={filters.reservation_covers}
          onChange={e => handleFilterChange('reservation_covers', e.target.value)}/></td>
        </tr>
      </tbody>
    </Table>
      
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Location</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Term</th>
            <th>Radius</th>
            <th>Sort by</th>
            <th>Device Platform</th>
            <th>Reservation Date</th>
            <th>Reservation time</th>
            <th>Reservation Cover</th>
            <th>Matches Party size_param</th>
            <th>Limit</th>
            <th>Offset</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id} >
              <td>{item.location}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.term}</td>
              <td>{item.radius}</td>
              <td>{item.sort_by}</td>
              <td>{item.device_platform}</td>
              <td>{item.reservation_date}</td>
              <td>{item.reservation_time}</td>
              <td>{item.reservation_covers}</td>
              <td>{item.matches_party_size_param === true ? "true":"false"}</td>
              <td>{item.limit}</td>
              <td>{item.offset}</td>
              <td>
              <Link to='/detail' state= {{ data: item }} >
                   Pergi ke Detail
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          {'<'}
        </button>
         &nbsp;Halaman   {currentPage} dari {pageCount} 
         &nbsp;<button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageCount}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Tables;