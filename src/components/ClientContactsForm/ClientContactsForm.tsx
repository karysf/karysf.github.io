import { Card } from "primereact/card";
import { InputMask } from "primereact/inputmask";
import { Message } from "primereact/message";

import styled from "styled-components";
const FormContainer = styled.div`
  background-color: blue;
`;
export function ClientContactsForm() {
  return (
    <div>
      <Message
        severity="info"
        text="Внимание! Для оформления заказа необходимо указать ваши контактные данные, по которым с вами сможет связаться менеджер и подтвердить ваш заказ."
      />
      <div>
        <label htmlFor="phone">Телефон: </label>
        <InputMask
          id="phone"
          mask="+7 (999) 999-9999"
          placeholder="+7 (999) 999-9999"
        />
      </div>
    </div>
  );
}
