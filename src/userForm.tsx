import { FormWrapper } from "./FormWrapper";
type userData = {
  Nombre: string;
  Apellido: string;
  Edad: string;
};
type userFormProps = userData & {
  updateFields: (fields: Partial<userData>) => void;
};
export function UserForm({
  Nombre,
  Apellido,
  Edad,
  updateFields,
}: userFormProps) {
  return (
    <>
      <FormWrapper title="Datos del usuario">
        <label>Nombre</label>
        <input
          value={Nombre}
          type="text"
          autoFocus
          required
          onChange={(e) => updateFields({ Nombre: e.target.value })}
        />
        <label> Apellido</label>
        <input
          value={Apellido}
          type="text"
          required
          onChange={(e) => updateFields({ Apellido: e.target.value })}
        />
        <label>Edad</label>
        <input
          value={Edad}
          type="text"
          required
          onChange={(e) => updateFields({ Edad: e.target.value })}
        />
      </FormWrapper>
    </>
  );
}

//
