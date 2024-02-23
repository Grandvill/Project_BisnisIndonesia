'use client';
import React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// mendefiniskan var untuk app drawer
type Anchor = 'left';

// style login button form
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  // app drawer
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 250, padding: 5, marginTop: 10 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Home', 'Features', 'Pricing', ' About'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // button
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    // navbar
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <main className="container-fluid">
          {(['left'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
          <a className="navbar-brand" href="">
            <img className="/" src="/bisnis.png" alt="" width="150" height="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active ms-3" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link ms-3" href="./Features">
                Features
              </a>
              <a className="nav-link ms-3" href="./Pricing">
                Pricing
              </a>
              <a className="nav-link ms-3" href="./About">
                About
              </a>
            </div>
          </div>
        </main>

        {/* login */}

        <div className=" justify-content-md-end">
          <a href="/"></a>
          <Button className="btn btn-light me-md-3" type="button" onClick={handleOpen}>
            Login
          </Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <form className="container">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Password" />

                <div className="container p-2">
                  <button type="submit" className="btn btn-primary" style={{ width: 300 }}>
                    Submit
                  </button>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
      </nav>

      {/* Body */}

      <div className="container p-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src="/2.jpg?text=First slide&bg=f5f5f5" alt="First slide" />
            <Carousel.Caption>
              <h5 style={{ color: 'white' }}>First slide label</h5>
              <p style={{ color: 'white' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/3.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h5 style={{ color: 'white' }}>Second slide label</h5>
              <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/4.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h5 style={{ color: 'white' }}>Third slide label</h5>
              <p style={{ color: 'white' }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        <div className="row p-1">
          <div className="col-3">
            <div className="card">
              <img src="/5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="./Home" className="btn btn-primary">
                  Home
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="/6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">
                  Features
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="/11.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">
                  Pricing
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="/8.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="./About" className="btn btn-primary">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
