import React, { useState, useEffect } from 'react';
import API from '../api';

const VillageForm = ({ onSuccess, selectedVillage, clearEdit }) => {
  const [form, setForm] = useState({
    name: '',
    numberOfCitizens: '',
    leader: ''
  });

  // Load data if editing
  useEffect(() => {
    if (selectedVillage) {
      setForm({
        name: selectedVillage.name,
        numberOfCitizens: selectedVillage.numberOfCitizens,
        leader: selectedVillage.leader
      });
    }
  }, [selectedVillage]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedVillage) {
        // Update mode
        await API.put(`/${selectedVillage._id}`, form);
        clearEdit();
      } else {
        // Create mode
        await API.post('/', form);
      }

      onSuccess();
      setForm({ name: '', numberOfCitizens: '', leader: '' });
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Village Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="numberOfCitizens"
          className="form-control"
          placeholder="Number of Citizens"
          value={form.numberOfCitizens}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="leader"
          className="form-control"
          placeholder="Leader Name"
          value={form.leader}
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {selectedVillage ? 'Update Village' : 'Add Village'}
        </button>
        {selectedVillage && (
          <button className="btn btn-secondary" onClick={clearEdit} type="button">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default VillageForm;
