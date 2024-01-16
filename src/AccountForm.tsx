import { FormWrapper } from "./FormWrapper";
type AccountData= {
    Email: string,
    Contraseña: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void;
  };

export function AccountForm({Email, Contraseña, updateFields}: AccountFormProps){
    return(
        <FormWrapper title= "Datos del usuario">
            <label>Email</label>
            <input autoFocus 
            required 
            type="email" 
            value={Email}
            onChange={(e) => updateFields({ Email: e.target.value })}
            />
            <label>Contraseña</label>
            <input required type="password" value={Contraseña} 
            onChange={(e) => updateFields({ Contraseña: e.target.value })}/>
        </FormWrapper>
    )
}