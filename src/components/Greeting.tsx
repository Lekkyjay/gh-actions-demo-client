export default function Greeting({ name }: { name?: string }) {
  return (
    <h1>Hello, {name || "World"}!</h1>
  )
}