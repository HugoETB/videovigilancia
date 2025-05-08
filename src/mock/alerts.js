const alerts = [
  {
    id: 1,
    cameraId: 1,
    type: "movimiento_sospechoso",
    timestamp: "2023-05-15T14:30:00",
    status: "pendiente",
    priority: "alta"
  },
  {
    id: 2,
    cameraId: 2,
    type: "objeto_abandonado",
    timestamp: "2023-05-15T10:15:00",
    status: "revisado",
    priority: "media"
  },
  {
    id: 3,
    cameraId: 1,
    type: "persona_buscada",
    timestamp: "2023-05-14T22:45:00",
    status: "resuelto",
    priority: "critica"
  }
];

export default alerts;