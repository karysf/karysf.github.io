import styled from "styled-components";

const Page = styled.div`
  width: 100%;
`;
export function Payment() {
  return (
    <Page>
      <h1>Оплата</h1>
      <h3>Наличный расчет</h3>
      <p>
        Вы можете произвести оплату товара наличными при получении или переводом
        на карту нашему менеджеру.
      </p>

      <h3>Безналичный расчет</h3>
      <p>
        Для юридических лиц возможна оплата продукции по безналичному расчету.
      </p>
      <p>
        Счет на товар выставляется с НДС 20%. Условия поставки прописаны в
        счете.
      </p>
    </Page>
  );
}
