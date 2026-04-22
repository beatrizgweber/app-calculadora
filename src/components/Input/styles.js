import styled from "styled-components";

export const DisplayContainer = styled.div`
  width: 100%;
  background: #f9fafb;
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 18px 16px;
  box-sizing: border-box;
`;

export const ExpressionText = styled.div`
  width: 100%;
  min-height: 18px;
  font-size: 14px;
  line-height: 1.2;
  color: #6b7280;
  text-align: right;
  font-variant-numeric: tabular-nums;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ValueText = styled.div`
  width: 100%;
  min-height: 38px;
  font-size: 34px;
  line-height: 1.1;
  color: #111827;
  text-align: right;
  font-variant-numeric: tabular-nums;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
