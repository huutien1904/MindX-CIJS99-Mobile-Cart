import React from 'react';

const Header = (props) => {
  const { totalCartItems } = props;
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary container-fluid'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About us
              </a>
            </li>
          </ul>
          <div
            style={{
              cursor: 'pointer',
            }}
            data-bs-toggle='modal'
            data-bs-target='#cartModal'>
            <span>Giỏ hàng ({totalCartItems})</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
