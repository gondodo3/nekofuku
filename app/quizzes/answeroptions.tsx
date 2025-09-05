//選択肢表示用
import React from "react";

type AnswerOptionsProps = {
	choices: string[];
	onSelect: (index: number) => void;
};

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({ choices, onSelect }) => {
	return (
		<div className="flex flex-col gap-2 mt-4">
			{choices.slice(0, 4).map((choice, idx) => (
				<button
					key={idx}
					className="px-4 py-2 bg-blue-200 hover:bg-blue-400 rounded text-lg transition-colors"
					onClick={() => onSelect(idx)}
				>
					{choice}
				</button>
			))}
		</div>
	);
};