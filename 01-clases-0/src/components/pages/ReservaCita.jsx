import React, { useState } from 'react';

function ReservaCita() {
    const [selectedService, setSelectedService] = useState('');
    const [selectedStylist, setSelectedStylist] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    // Ejemplo de disponibilidad de horas (puedes personalizarlo según tus necesidades)
    const availableTimes = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
    ];

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    const handleStylistChange = (e) => {
        setSelectedStylist(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    return (
        <div className="reserva-cita">
            {/* ... (título y descripción) */}
            <form className="reserva-cita__form">
                <div className="form-group">
                    <label htmlFor="servicio">Servicio:</label>
                    <select
                        id="servicio"
                        name="servicio"
                        value={selectedService}
                        onChange={handleServiceChange}
                    >
                        <option value="">Seleccionar servicio</option>
                        <option value="corte">Corte de Pelo</option>
                        <option value="maquillaje">Maquillaje</option>
                        {/* Agrega más opciones de servicio según tus necesidades */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="estilista">Estilista:</label>
                    <select
                        id="estilista"
                        name="estilista"
                        value={selectedStylist}
                        onChange={handleStylistChange}
                    >
                        <option value="">Seleccionar estilista</option>
                        <option value="ana">Ana Rodríguez</option>
                        <option value="carlos">Carlos Gómez</option>
                        {/* Agrega más opciones de estilista según tus necesidades */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha de Cita:</label>
                    <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={selectedDate}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora de Cita:</label>
                    <select
                        id="hora"
                        name="hora"
                        value={selectedTime}
                        onChange={handleTimeChange}
                    >
                        <option value="">Seleccionar hora</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje Adicional:</label>
                    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
                </div>
                <button className="reserva-cita__submit-button" type="submit">
                    Reservar Cita
                </button>
            </form>
        </div>
    );
}

export default ReservaCita;
