import { Grid, KeyButton } from "./styles.js";

const Buttons = ({ onKey }) => {
  const keys = [
    { label: "C", kind: "action" },
    { label: "÷", kind: "op" },
    { label: "×", kind: "op" },
    { label: "⌫", kind: "danger" },
    { label: "7", kind: "num" },
    { label: "8", kind: "num" },
    { label: "9", kind: "num" },
    { label: "-", kind: "op" },
    { label: "4", kind: "num" },
    { label: "5", kind: "num" },
    { label: "6", kind: "num" },
    { label: "+", kind: "op", tall: true },
    { label: "1", kind: "num" },
    { label: "2", kind: "num" },
    { label: "3", kind: "num" },
    { label: "0", kind: "num", wide: true },
    { label: ".", kind: "num" },
    { label: "=", kind: "equal" },
  ];

  return (
    <Grid>
      {keys.map((k) => (
        <KeyButton
          key={k.label}
          $kind={k.kind}
          $wide={Boolean(k.wide)}
          $tall={Boolean(k.tall)}
          type="button"
          onClick={() => onKey(k.label)}
        >
          {k.label}
        </KeyButton>
      ))}
    </Grid>
  );
};

export default Buttons;

