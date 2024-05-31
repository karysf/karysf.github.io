import styled from "styled-components";

const Phones = styled.div`
  > p {
    font-weight: 700;
    font-size: 18px;
  }
  margin-bottom: 35px;
`;

const Requisites = styled.div`
  > div {
    display: grid;
    grid-template-columns: 150px auto;
    border: 1px solid black;
    > p {
      margin: 5px;
    }
  }
`;
export function Contacts() {
  return (
    <>
      <h1>Контакты</h1>
      <Phones>
        <p>+7 (917) 272-61-23 - менеджер по продажам Владислав</p>
        <p>+7 (993) 417-78-80 - менеджер по продажам Алексей</p>
      </Phones>

      <h2>Наша карта партнёра</h2>
      <Requisites>
        <div>
          <p>Наименование:</p>
          <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПАЙПФИТИНГ"</p>
        </div>
        <div>
          <p>ИНН:</p>
          <p>1684003591</p>
        </div>
        <div>
          <p>КПП:</p>
          <p>168401001</p>
        </div>

        <div>
          <p> Юр. Адрес:</p>
          <p>
            420139, РОССИЯ, РЕСП. ТАТАРСТАН, г. КАЗАНЬ, ул. РИХАРДА ЗОРГЕ, Д.
            100/1, ПОМЕЩ. 2030
          </p>
        </div>

        <div>
          <p>ОГРН:</p>
          <p>1221600027395</p>
        </div>
        <div>
          <p>ГЕНЕРАЛЬНЫЙ ДИРЕКТОР:</p>
          <p>Николаев Владислав Евгеньевич</p>
        </div>
        <div>
          <p>р/счет:</p>
          <p>40702810762000060327</p>
        </div>
        <div>
          <p>БИК:</p>
          <p>049205603</p>
        </div>
        <div>
          <p>Корр. счет:</p>
          <p>30101810600000000603</p>
        </div>
        <div>
          <p>Наименование Банка:</p>
          <p>ОТДЕЛЕНИЕ "БАНК ТАТАРСТАН" N8610 ПАО СБЕРБАНК</p>
        </div>
      </Requisites>
    </>
  );
}
