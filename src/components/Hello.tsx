// Simple component to say Hello

interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps) => {
  return (
    <section role="status" aria-live="polite">
      <h3>Hello {name}</h3>
    </section>
  );
};

export { Hello };
