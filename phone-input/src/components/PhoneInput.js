import { useState } from 'react';

const PHONE_MAX_SIZE = 10;

export default function PhoneInput() {
  const [phone, setPhone] = useState('');

  function handleChange(event) {
    const number = clearSymbols(event.target.value).substring(
      0,
      PHONE_MAX_SIZE
    );
    setPhone(formatNumber(number));
  }

  function handleSubmit() {
    setPhone('');
  }

  const disableSubmit = clearSymbols(phone).length < PHONE_MAX_SIZE;

  return (
    <>
      <input
        type="tel"
        value={phone}
        placeholder="(555) 555-5555"
        onChange={handleChange}
      />
      <button disabled={disableSubmit} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

function formatNumber(number) {
  let formattedNumber = '';
  const areaCode = number.substring(0, 3);
  const phonePartOne = number.substring(3, 6);
  const phonePartTwo = number.substring(6);

  if (areaCode) {
    formattedNumber += '(' + areaCode;
  }

  if (phonePartOne) {
    formattedNumber += ') ' + phonePartOne;
  }

  if (phonePartTwo) {
    formattedNumber += '-' + phonePartTwo;
  }
  return formattedNumber;
}

function clearSymbols(str) {
  return str.replace(/\D/g, '');
}
