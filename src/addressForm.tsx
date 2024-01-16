import { FormWrapper } from "./FormWrapper";
type AddresData = {
    Calle: string
    Ciudad: string
    Provincia: string,
    ZIP: string
  }
type AddresFormProps = AddresData &{
    updateFields: (fields: Partial<AddresData>) => void;
}

export function AddresForm({Calle, Ciudad, Provincia, ZIP, updateFields}: AddresFormProps){
    return(
        <FormWrapper title= "Domicilio">
            <label> Calle</label>
            <input autoFocus required type="text" value={Calle}
            onChange={(e) => updateFields({ Calle: e.target.value })}
            />
            <label>Ciudad</label>
            <input  required type="text" value={Ciudad}
            onChange={(e) => updateFields({ Ciudad: e.target.value })}/>
            <label>Provincia</label>
            <input  required type="text" value={Provincia}
            onChange={(e) => updateFields({ Provincia: e.target.value })}/>
            <label>Código postal</label>
            <input  required type="text" value={ZIP}
            onChange={(e) => updateFields({ ZIP: e.target.value })}/>
        </FormWrapper>
    )
}