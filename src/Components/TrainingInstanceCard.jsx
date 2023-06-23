export default function ({ trainingInstance }) {
  return (
    <div className="my-6 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-6">
      <div className="text-lg font-bold">{trainingInstance.name}</div>
      <div className="text-sm">{trainingInstance.weight} kg</div>
      <div className="text-sm">{trainingInstance.times} 回</div>
    </div>
  );
}
