import React, { useState } from 'react';

const CitizenReportForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el reporte al backend
    console.log('Reporte enviado:', formData);
    setSubmitted(true);
    setFormData({ type: '', location: '', description: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Reportar Incidente</h2>
      {submitted && (
        <div className="mb-4 p-3 bg-green-500 text-white rounded-lg">
          ¡Reporte enviado con éxito!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Tipo de incidente</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="robo">Robo</option>
            <option value="vandalismo">Vandalismo</option>
            <option value="accidente">Accidente</option>
            <option value="sospechoso">Persona sospechosa</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Ubicación</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="Ej: Plaza Central"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
        >
          Enviar Reporte
        </button>
      </form>
    </div>
  );
};

export default CitizenReportForm;