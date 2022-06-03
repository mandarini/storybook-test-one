export interface OneProps {
  name: string;
  age: number;
  happy: boolean;
}

export function One(props: OneProps) {
  return (
    <div>
      <p>Name is {props.name}</p>
      <p>Age is {props.age}</p>
      <p>{props.happy ? 'happy' : 'sad'} </p>
    </div>
  );
}

export default One;
