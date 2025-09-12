import React from 'react'

const Sidebar = () => {

  const items = ['Dashboard', 'Users', 'Settings', 'Profile', 'Logout'];




  return (
    <div className="sidebar">
      <h2>Sidebar Component</h2>
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li className='menu-item' key={index}>{item}</li>
        ))}
      </ul>

      <div className="slider-container">
        <h2>Slider Component</h2>
        <p>This is a placeholder for the slider functionality.</p>
      </div>
      
    </div>
  )
}

export default Sidebar