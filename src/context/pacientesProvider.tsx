import { PropsWithChildren, useState } from "react";
import { Paciente, PacienteContext } from "./pacientesContext";


export const PacientesProvider = ({ children }: PropsWithChildren) => {

    const [pacientes, setPacientes] = useState<Paciente[]>([])

    const agregarPaciente = (paciente: Paciente) => {
        setPacientes((prev: Paciente[]) => {
            return [...prev, paciente];
        });

    }
    return (
        <PacienteContext.Provider value={{
            pacientes,
            agregarPaciente
        }} >
            {children}
        </PacienteContext.Provider>
    )
}
