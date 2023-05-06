Basic functionality of the game "Who wants to become a millionaire":

1. - the player takes turns answering one of the 12 questions;
2. - each question has 4 possible answers and only one is correct;
3. - if the answer is correct, the player gets to the next question;
4. - ifthe answer is incorrect, the player gets to the final screen;
5. - on the final screen you need to show the overall result of the game;
6. - the layout should be adaptive.

Technical requirements:

1. - make the layout adaptive (from iPhone 5 to 4k displays);
2. - do the layout without using CSS frameworks;
3. - the game config (questions, answers, money for the correct answer, etc.) must be in json format;
4. - the config should be expandable: more or fewer answers to the question; several correct answers, etc.;
5. - the task is implemented using the latest version of React;
6. - all client code must fully comply with the eslint/airbnb out-of-the-box rules.
7. - when the answer is selected, the button changes state to selected, and after 2 seconds button changes state to correct if the answer is correct and wrong state - if the answer is wrong.
8. Make all client code typed via TypeScript.

Evaluation criteria:
1. - a layout that will be easy to expand and maintain;
2. - architectural organization of the code;
3. - correct handling of emergency situations