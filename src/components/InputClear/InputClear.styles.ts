import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 300px; /* фиксированная ширина по запросу */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px 34px 10px 12px;

  background: #fff;
  border: 1px solid #e6e8eb;
  border-radius: 10px;

  /* внутренняя тень по краям */
  box-shadow:
    inset 0 2px 6px rgba(0, 0, 0, 0.08),
    inset 0 0 0 1px rgba(0, 0, 0, 0.04);

  font-size: 14px;
  line-height: 1.2;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  color: #000; /* ✅ текст */

  &:focus {
    border-color: #3b82f6; /* аккуратный синий акцент */
    box-shadow:
      inset 0 2px 6px rgba(0, 0, 0, 0.08),
      inset 0 0 0 1px rgba(59, 130, 246, 0.25),
      0 0 0 4px rgba(59, 130, 246, 0.12); /* мягкое внешнее свечение */
  }

  &::placeholder {
    color: #9aa1a9;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  border: none;
  background: transparent;
  cursor: pointer;

  color: #000; /* ✅ иконка */
  transition: color 0.15s ease, transform 0.08s ease;

  &:hover {
    color: #111827;
  }

  &:active {
    transform: scale(0.96);
  }
`;
