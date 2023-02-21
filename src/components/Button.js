export default function Button({ title, msg }) {
  return <button onClick={() => alert(msg)}>{title}</button>;
}
