export default function ({ trainingInstance }) {
  return (
    <div className="my-6 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-6">
      <div className="text-xl font-bold flex justify-center">{trainingInstance.name}</div>
      <div className="text-sm text-text">重量: {trainingInstance.weight} kg</div>
      <div className="text-sm text-text">回数: {trainingInstance.times} 回</div>
    </div>
  );
}
