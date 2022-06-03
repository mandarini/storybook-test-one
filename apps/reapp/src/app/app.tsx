export interface AppProps {
  name: string;
  age: number;
  happy: boolean;
}

export function App(props: AppProps) {
  return (
    <>
      <p>Name is {props.name}</p>
      <p>Age is {props.age}</p>
      <p>{props.happy ? 'happy' : 'sad'} </p>
    </>
  );
}

export default App;
