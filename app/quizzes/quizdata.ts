// クイズ型定義
export type Quiz = {
	id: number;
	question: string;
	choices: string[];
	answer: number; // 正解の選択肢インデックス
	explanation: string;
	correctMark: string; // "○" か "×"
};