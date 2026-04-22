import { DisplayContainer, ExpressionText, ValueText } from "./styles";

const Input = ({ value, expression }) => {
  return (
    <DisplayContainer>
      <ExpressionText data-testid="display-expression">{expression || "\u00A0"}</ExpressionText>
      <ValueText data-testid="display-value">{value}</ValueText>
    </DisplayContainer>
  );
};

export default Input;

