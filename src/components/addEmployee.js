import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '/Users/mediaoneph/reactjs/sample/src/index.css';

function AddEmployee(props) {
  const [show, setShow] = useState(false);
  const [img, setImage] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="block mx-auto m-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">+ Add User</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <form
                onSubmit={(e) => {
                    handleClose();
                    e.preventDefault();
                    setName('');
                    setRole('');
                    setImage('');
                    props.newEmployee(name, role, img);
                }}
                id="form1" className="bg-white px-8"
            >
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2"for="role">
                    Role
                </label>
                <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="role" 
                    type="text"
                    value={role}
                    onChange={(e) => {setRole(e.target.value)}}
                />
                </div>
                <div className="mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-2"for="image">
                    Image URL
                </label>
                <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="image" 
                    type="text"
                    value={img}
                    onChange={(e) => {setImage(e.target.value)}}
                />
                </div>
                <div className="flex items-center justify-between">
                </div>
            </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <button form="form1" onClick={handleClose} class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;