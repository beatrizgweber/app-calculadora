import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;

export const KeyButton = styled.button`
  border: 1px solid
    ${({ $kind }) => {
      if ($kind === "equal") return "#15803d";
      if ($kind === "op") return "#2563eb";
      if ($kind === "danger") return "#dc2626";
      return "#d1d5db";
    }};
  border-radius: 8px;
  padding: 14px 12px;
  font-size: 18px;
  cursor: pointer;
  background: ${({ $kind }) => {
    if ($kind === "equal") return "#16a34a";
    if ($kind === "op") return "#2563eb";
    if ($kind === "danger") return "#dc2626";
    return "#f3f4f6";
  }};
  color: ${({ $kind }) =>
    $kind === "op" || $kind === "equal" || $kind === "danger" ? "#ffffff" : "#111827"};
  grid-column: ${({ $wide }) => ($wide ? "span 2" : "auto")};
  grid-row: ${({ $tall }) => ($tall ? "span 2" : "auto")};
  transition: background-color 120ms ease, transform 80ms ease;

  &:hover {
    background: ${({ $kind }) => {
      if ($kind === "equal") return "#15803d";
      if ($kind === "op") return "#1d4ed8";
      if ($kind === "danger") return "#b91c1c";
      return "#e5e7eb";
    }};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.25);
    outline-offset: 2px;
  }
`;