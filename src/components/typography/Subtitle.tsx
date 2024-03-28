function Subtitle({ text }: { text: string }) {
  return (
    <h2 className="scroll-m-20 text-xl font-light tracking-tight lg:text-2xl">
      {text}
    </h2>
  );
}

export default Subtitle;
