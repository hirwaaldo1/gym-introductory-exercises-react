export default function Button({ title, msg }) {
  return <button onClick={() => alert("you clicked "+msg)}>{title}</button>;
}
