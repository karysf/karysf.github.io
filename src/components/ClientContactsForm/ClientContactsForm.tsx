import { InputMask } from "primereact/inputmask";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function ClientContactsForm({
  setClientContacts,
}: {
  setClientContacts: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <div>
      <label htmlFor="phone">Телефон: </label>
      <InputMask
        id="phone"
        mask="+7 (999) 999-9999"
        placeholder="+7 (999) 999-9999"
        onChange={(e) => {
          setClientContacts(e.target.value || null);
        }}
      />
    </div>
  );
}
