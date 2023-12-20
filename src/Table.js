import React, { useState } from 'react';
const Table = ({ data }) => {
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    price: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredData = data.filter(item => {
    return (
      item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      item.category.toLowerCase().includes(filters.category.toLowerCase()) &&
      (filters.price === '' || item.price <= parseInt(filters.price)) &&
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

  const handleRowClick = item => {
    alert(`Anda mengklik produk: ${item.name} dengan ID ${item.id}`);
    // Implementasikan aksi atau navigasi sesuai kebutuhan
  };

  return (
    <div>
      <div>
        <label>Cari:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <label>Cari Nama Produk:</label>
        <input
          type="text"
          value={filters.name}
          onChange={e => handleFilterChange('name', e.target.value)}
        />
      </div>
      <div>
        <label>Cari Kategori:</label>
        <input
          type="text"
          value={filters.category}
          onChange={e => handleFilterChange('category', e.target.value)}
        />
      </div>
      <div>
        <label>Harga Maksimal:</label>
        <input
          type="text"
          value={filters.price}
          onChange={e => handleFilterChange('price', e.target.value)}
        />
      </div>
      {/* Tambahkan elemen filter lain sesuai kebutuhan */}
      <table>
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>#</th>
            {/* Tambahkan kolom lain sesuai kebutuhan */}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>Detail</td>
              {/* Tambahkan sel lain sesuai kebutuhan */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          {'<'}
        </button>
        Halaman {currentPage} dari {pageCount}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageCount}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Table;