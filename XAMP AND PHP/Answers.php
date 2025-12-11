<?php
$score = 0;
$answers = [
  'q1' => 'C',
  'q2' => 'A',
  'q3' => 'B',
  'q4' => 'A',
  'q5' => 'C',
  'q6' => 'B',
  'q7' => 'A',
  'q8' => 'C',
  'q9' => 'A',
  'q10' => 'A',
  'q11' => 'C',
  'q12' => 'B',
  'q13' => 'C',
  'q14' => 'C',
  'q15' => 'B',
];

echo "<h2>Your Answers and Results</h2>";
foreach ($answers as $q => $correct) {
    $num = substr($q, 1);
    if (isset($_GET[$q])) {
        $userAnswer = $_GET[$q];
        echo "$num. Your answer: $userAnswer. Correct answer: $correct.<br>";
        if ($userAnswer == $correct) $score++;
    } else {
        echo "$num. No answer provided. Correct answer: $correct.<br>";
    }
}
echo "<br><strong>Your Total Score: $score / 15</strong>";
?>
