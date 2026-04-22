import { useState } from "react";
import { Container, Content } from "./styles";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

const operators = ["+", "-", "×", "÷"];

const formatResult = (result) => {
  if (!Number.isFinite(result)) return "Erro";
  if (Object.is(result, -0)) return "0";
  return String(result);
};

const calculate = (firstValue, operation, secondValue) => {
  const first = Number(firstValue);
  const second = Number(secondValue);

  if (operation === "+") return formatResult(first + second);
  if (operation === "-") return formatResult(first - second);
  if (operation === "×") return formatResult(first * second);
  if (operation === "÷") {
    if (second === 0) return "Erro";
    return formatResult(first / second);
  }

  return secondValue;
};

const App = () => {
  const [value, setValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");
  const [shouldReset, setShouldReset] = useState(false);

  const expression = previousValue && operation ? `${previousValue} ${operation}` : "";

  const clear = () => {
    setValue("0");
    setPreviousValue("");
    setOperation("");
    setShouldReset(false);
  };

  const handleDigit = (digit) => {
    if (shouldReset) {
      setValue(digit);
      setShouldReset(false);
      return;
    }

    if (value === "0") {
      setValue(digit);
      return;
    }

    setValue(value + digit);
  };

  const handleDot = () => {
    if (shouldReset) {
      setValue("0.");
      setShouldReset(false);
      return;
    }

    if (value.includes(".")) return;
    setValue(value + ".");
  };

  const handleBackspace = () => {
    if (shouldReset) {
      setValue("0");
      setShouldReset(false);
      return;
    }

    const nextValue = value.slice(0, -1);
    setValue(nextValue && nextValue !== "-" ? nextValue : "0");
  };

  const handleOperation = (nextOperation) => {
    if (previousValue && operation && !shouldReset) {
      const result = calculate(previousValue, operation, value);

      if (result === "Erro") {
        setValue("Erro");
        setPreviousValue("");
        setOperation("");
        setShouldReset(true);
        return;
      }

      setPreviousValue(result);
      setValue(result);
      setOperation(nextOperation);
      setShouldReset(true);
      return;
    }

    if (!previousValue) {
      setPreviousValue(value);
    }

    setOperation(nextOperation);
    setShouldReset(true);
  };

  const handleEquals = () => {
    if (!previousValue || !operation) return;

    const result = calculate(previousValue, operation, value);
    setValue(result);
    setPreviousValue("");
    setOperation("");
    setShouldReset(true);
  };

  const onKey = (label) => {
    if (label === "C") {
      clear();
      return;
    }

    if (value === "Erro") return;
    if (label === "⌫") return handleBackspace();
    if (label >= "0" && label <= "9") return handleDigit(label);
    if (label === ".") return handleDot();
    if (operators.includes(label)) return handleOperation(label);
    if (label === "=") return handleEquals();
  };

  return (
    <Container>
      <Content>
        <Input expression={expression} value={value} />
        <Buttons onKey={onKey} />
      </Content>
    </Container>
  );
};

export default App;

