import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container">

            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler ">

                <span className="navbar-toggler-icon"></span>
            </button>



            <div class="collapse navbar-collapse d-grid justify-content-between" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="" class="nav-link active">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">
                            Bootstrap Grid
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link 
                        dropdown-toggle" id="navbarDropDown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            More Practice
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a href="" class="dropdown-item">Class Practice</a></li>
                            <li><a href="" class="dropdown-item">Form Practice</a></li>
                            <li><a href="" class="dropdown-item">Cards Practice</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">
                            About Another
                        </a>
                    </li>
                </ul>
                <form action="" class="d-flex">
                    <input type="text" class="form-control me-2"/>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>

        </div>
    </nav>
  )
}

export default Nav