import "./button.scss";

interface ButtonInterface {
  text: string;
  variant: "ghost" | "dark" | "light" | "";
}

function Button({ text, variant }: ButtonInterface) {
  return <button className={`${variant}Button`}>{text}</button>;
}

export default Button;
