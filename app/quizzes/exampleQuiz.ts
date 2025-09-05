

import type { Quiz } from "./quizdata";

export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "犬福の好きな食べ物は？",
    choices: ["りんご", "さかな", "にんじん", "おにぎり"],
    answer: 1, // さかな
    explanation: "犬福はさかなが大好きです。",
    correctMark: "○"
  },
  {
    id: 2,
    question: "犬福の好きな遊びは？",
    choices: ["かけっこ", "お昼寝", "ボール遊び", "おさんぽ"],
    answer: 2, // ボール遊び
    explanation: "犬福はボール遊びが得意です。",
    correctMark: "○"
  },
  {
    id: 3,
    question: "犬福の苦手なものは？",
    choices: ["水", "高いところ", "暗い場所", "大きな音"],
    answer: 3, // 大きな音
    explanation: "犬福は大きな音が苦手です。",
    correctMark: "×"
  }
];
