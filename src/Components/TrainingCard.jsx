export default function ({ training }) {
  return (
    <div className="my-6 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-6">
      <div className="flex justify-center text-xl font-bold">
        {training.name}
      </div>
      <div className="my-2 text-sm">{training.weight} kg </div>
      <div className="my-2 text-sm">{training.times} 回 </div>
      <div className="my-2 text-sm">{training.tags}</div>
    </div>
  );
}
