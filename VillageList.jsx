import React, { useEffect, useState } from 'react';
import API from '../api';

const VillageList = ({ onEdit }) => {
  const [villages, setVillages] = useState([]);

  const fetchVillages = async () => {
    const res = await API.get('/');
    setVillages(res.data);
  };

  const deleteVillage = async (id) => {
    if (!window.confirm('Delete this village?')) return;
    await API.delete(`/${id}`);
    fetchVillages();
  };

  useEffect(() => {
    fetchVillages();
  }, []);

  return (
    <div>
      <h3 className="mb-3">All Villages</h3>
      <ul className="list-group">
        {villages.map((v) => (
          <li key={v._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{v.name}</strong> — {v.numberOfCitizens} citizens, led by {v.leader}
            </div>
            <div className="btn-group">
              <button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(v)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteVillage(v._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VillageList;
