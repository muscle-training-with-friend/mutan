export default function({ training_instance }) {
	return (
		<div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
			<div className="text-lg font-bold">{training_instance.name}</div>
			<div className="text-sm">{training_instance.weight} kg</div>
			<div className="text-sm">{training_instance.times} 回</div>
		</div>
	);
}
