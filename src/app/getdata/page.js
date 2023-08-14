export default function Getdata() {
    return (
      <main>
       <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">Navbar</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">Link</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameName="dropdown-menu">
            <li><a classNameName="dropdown-item" href="#">Action</a></li>
            <li><a classNameName="dropdown-item" href="#">Another action</a></li>
            <li><hr classNameName="dropdown-divider" /></li>
            <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div classNameName="row g-3">
  <div className="col-sm-7">
    <input type="text" className="form-control" placeholder="City" aria-label="City" />
  </div>
  <div className="col-sm">
    <input type="text" className="form-control" placeholder="State" aria-label="State" />
  </div>
  <div className="col-sm">
    <input type="text" className="form-control" placeholder="Zip" aria-label="Zip" />
  </div>
</div>
      </main>
    )
  }
  