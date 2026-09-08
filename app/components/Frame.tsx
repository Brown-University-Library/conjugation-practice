/* This interface will be used to separate the different parts of the frame out */
export interface Frame {
  imageURL: string;
  dialogue: string;
  hiragana_answer?: string;
  kanji_answer?: string;
  prompt?: string;
  type: string;
}

/* Index into this list in page.tsx to switch between which frame you see*/
export const frameList: Frame[] = [
  /* STORY ONE (BOBO GOES TO SCHOOL): おとす、あける、おちる、わく、わかす
  /* Bobo is sleeping. Wake them up! */
  {
    imageURL: "frames/frame-1-0.jpg",
    dialogue:
      "It's 7 AM, time for Bobo to wake up! They fell asleep holding their phone. Help drop the phone to wake up Bobo! You should conjugate the verb in the present tense polite (～ます) form!",
    hiragana_answer: "おとします",
    kanji_answer: "落とします",
    prompt: "スマホを",
    type: "question",
  },
  /* You got it wrong. Bobo stays asleep */
  {
    imageURL: "frames/frame-1-1.jpg",
    dialogue:
      "Oh no, Bobo didn't wake up! Think carefully, or Bobo may never get to school!",
    type: "wrong",
  },
  /* You got it right. Bo has woken up! */
  {
    imageURL: "frames/frame-1-2.jpg",
    dialogue:
      "Alright, it's time to get out of bed. It'll be another great day at 棒人間高校 today! Bobo gets ready for class.",
    type: "right",
  },
  /* Bobo needs your help opening the door */
  {
    imageURL: "frames/frame-1-3.jpg",
    dialogue:
      "It's time to leave, but Bobo forgot how to open their door. They always get so confused with how it works! Help Bobo open the door by conjugating a verb in present polite (～ます) form.",
    hiragana_answer: "あけます",
    kanji_answer: "開けます",
    prompt: "ドアを",
    type: "question",
  },
  /* You got it wrong. Bobo runs into the door */
  {
    imageURL: "frames/frame-1-4.jpg",
    dialogue:
      "Whoops! Bobo ran straight into the door... with another attempt, you can save them!",
    type: "wrong",
  },
  /* You got it right. Bobo is able to leave! */
  {
    imageURL: "frames/frame-1-5.jpg",
    dialogue:
      "Bobo made it out of their house! They're looking forward to the school day.",
    type: "right",
  },
  /* Bobo is talking to their friend about how how their phone fell today */
  {
    imageURL: "frames/frame-1-6.jpg",
    dialogue:
      'Bobo is talking to their friend at school about how their phone fell on them this morning. Bobo is studying abroad, so they need some help remembering how to say "the phone fell" Conjugate the verb in past tense polite (～ました) form!',
    hiragana_answer: "おちました",
    kanji_answer: "落ちました",
    prompt: "スマホが",
    type: "question",
  },
  /* You got it wrong. Bobo thinks it must be something else */
  {
    imageURL: "frames/frame-1-7.jpg",
    dialogue: "Bobo doesn't think that's quite right. Give it another try.",
    type: "wrong",
  },
  /* You got it right. Bobo succesfully conjugated the verb */
  {
    imageURL: "frames/frame-1-8.jpg",
    dialogue: "Great work! Bobo avoided conjugating the verb incorrectly.",
    type: "right",
  },
  /* Bobo is taking a test and the question is very specific */
  {
    imageURL: "frames/frame-1-9.jpg",
    dialogue:
      'Bobo has to take a test, and one of questions happens to be your speciality -- transtive and intransitive verbs! Help Bobo write, "the water boils" in present polite (～ます) form.',
    hiragana_answer: "わきます",
    kanji_answer: "わきます",
    prompt: "お湯が",
    type: "question",
  },
  /* You got it wrong. Bobo thinks it's something else */
  {
    imageURL: "frames/frame-1-10.jpg",
    dialogue: "Bobo doesn't think that's quite right. Give it another shot.",
    type: "wrong",
  },
  /* You got it right. Bobo will get the question correct now */
  {
    imageURL: "frames/frame-1-11.jpg",
    dialogue: "Awesome! Bobo got the question correct!",
    type: "right",
  },
  /* Bobo has had a long day. They want some nice tea. Help them boil some water */
  {
    imageURL: "frames/frame-1-12.jpg",
    dialogue:
      "Bobo has had a long day. They want to have some tea before heading to bed. Help them boil some water, in the present polite (～ます) form.",
    hiragana_answer: "わかします",
    kanji_answer: "沸かします",
    prompt: "お湯を",
    type: "question",
  },
  /* You got it wrong. Bobo thinks it's something else */
  {
    imageURL: "frames/frame-1-13.jpg",
    dialogue: "Bobo doesn't think that's quite right. Try again.",
    type: "wrong",
  },
  /* You got it right. Bobo can finally go to bed! */
  {
    imageURL: "frames/frame-1-1.jpg",
    dialogue:
      "Great work! Bobo enjoys their hot tea and can finally go to bed.",
    type: "right",
  },
  /* STORY TWO (BOBO PLAYS A VIDEO GAME): つける、たすける、あがる、きこえる、けす*/
  /* Bobo wants to play a game, help them turn on the computer */
  {
    imageURL: "frames/frame-1-3.jpg",
    dialogue:
      "Bobo wants to play a new video game they bought. Help Bobo turn on their computer in the present polite (～ます) form.",
    hiragana_answer: "つけます",
    kanji_answer: "点けます",
    prompt: "コンピューターを",
    type: "question",
  },
  /* You got it wrong. The computer is still off */
  {
    imageURL: "frames/frame-2-1.jpg",
    dialogue: "Bobo's computer didn't turn on. Please try again.",
    type: "wrong",
  },
  /* You got it right. Bobo's computer is on */
  {
    imageURL: "frames/frame-2-2.jpg",
    dialogue: "Great work! Bobo's computer has turned on successfully!",
    type: "right",
  },
  /* Bobo wants to save people to become a hero */
  {
    imageURL: "frames/frame-2-3.jpg",
    dialogue:
      "Bobo is now in the game. They want to go out and save people to start their journey as a hero. Help Bobo save people in the present polite (～ます) form!",
    hiragana_answer: "たすけます",
    kanji_answer: "助けます",
    prompt: "ひとを",
    type: "question",
  },
  /* You got it wrong. Bobo wasn't able to find anyone to rescue */
  {
    imageURL: "frames/frame-2-4.jpg",
    dialogue:
      "Oh no! You were incorrect. Bobo will be able to become a hero soon though!",
    type: "wrong",
  },
  /* You got it right. Bobo saves nearby villagers and gets applauded as a hero */
  {
    imageURL: "frames/frame-2-5.jpg",
    dialogue:
      "Amazing! Bobo was able to save nearby villagers and get applauded as a hero.",
    type: "right",
  },
  /* Help Bobo level up */
  {
    imageURL: "frames/frame-2-6.jpg",
    dialogue:
      "Unlike other protagonists, Bobo isn't able to do solo leveling. The game requires you to use your knowledge of transitive and intransitive verbs to say, 'the level rises (～ます form)' before you can fully level up (a very educational game)",
    hiragana_answer: "あがります",
    kanji_answer: "上がります",
    prompt: "レベルが",
    type: "question",
  },
  /* You got it wrong. Bobo couldn't level up */
  {
    imageURL: "frames/frame-2-4.jpg",
    dialogue: "Bobo failed to level up :(",
    type: "wrong",
  },
  /* You got it right. Bobo succesfully leveled up! */
  {
    imageURL: "frames/frame-2-8.jpg",
    dialogue: "Spot on! Bobo was able to level up :D",
    type: "right",
  },
  /* Help Bobo defeat the demon king */
  {
    imageURL: "frames/frame-2-9.jpg",
    dialogue:
      "Bobo is up against the final boss, the Demon King. They're too scared to fight him, but the villagers that Bobo saved earlier are cheering them on. Help Bobo be able to hear their voices, in the present polite (～ます) form!",
    hiragana_answer: "きこえます",
    kanji_answer: "聞こえます",
    prompt: "こえが",
    type: "question",
  },
  /* You got it wrong. The Demon King attacks Bobo */
  {
    imageURL: "frames/frame-2-10.jpg",
    dialogue:
      "Bobo isn't able to muster up the courage to fight back, so the Demon King is able to land a hit on them.",
    type: "wrong",
  },
  /* You got it right. Bobo gets fired up to fight the Demon King */
  {
    imageURL: "frames/frame-2-11.jpg",
    dialogue:
      "Incredible! Bobo was able to hear the villagers cheering them on, and is now fired up to fight the Demon King.",
    type: "right",
  },
  /* Turn off the light for Bobo so they can sleep */
  {
    imageURL: "frames/frame-2-12.jpg",
    dialogue:
      "It looks like Bobo fell asleep as they were playing their game. But, the lights are still on, which make wake up Bobo. Help turn off the lights in present polite (～ます) form.",
    hiragana_answer: "けします",
    kanji_answer: "消します",
    prompt: "電気を",
    type: "question",
  },
  /* You got it wrong. Bobo wakes up */
  {
    imageURL: "frames/frame-2-13.jpg",
    dialogue:
      "You didn't turn off the lights correctly. Bobo groggily wakes up and tries to go back to sleep.",
    type: "wrong",
  },
  /* You got it right. Bobo can sleep */
  {
    imageURL: "frames/frame-1-0.jpg",
    dialogue:
      "Well done! You turned the lights off and Bobo is able to sleep peacefully",
    type: "right",
  },
  /* STORY THREE (BOBO RUNS A RELAY RACE): 変える、うごかす、はじまる、うごく、あつめる */
  /* Help convince Bobo to run the race */
  {
    imageURL: "frames/frame-3-0.jpg",
    dialogue:
      "It's sports day at Bobo's school. Bobo's friend wants them to enter a relay race but Bobo doesn't want to. Help Bobo's friend change their mind, in the present polite (～ます) form!",
    hiragana_answer: "かえます",
    kanji_answer: "変えます",
    prompt: "考えを",
    type: "question",
  },
  /* You got it wrong. Bobo refuses to run */
  {
    imageURL: "frames/frame-3-1.jpg",
    dialogue:
      "It looks like you couldn't change Bobo's mind. Please try again.",
    type: "wrong",
  },
  /* You got it right. Bobo accepts (begrudgingly) */
  {
    imageURL: "frames/frame-3-2.jpg",
    dialogue:
      "Well done! You were able to make Bobo accept their friend's request (begrudgingly).",
    type: "right",
  },
  /* Bobo is training. Help them move the tire! */
  {
    imageURL: "frames/frame-3-3.jpg",
    dialogue:
      "Bobo won't be able to win this race without a training arc. They decide to do some training with a tire but they're struggling. Help them move the tire in present polite (～ます) form.",
    hiragana_answer: "うごかします",
    kanji_answer: "動かします",
    prompt: "タイヤを",
    type: "question",
  },
  /* You got it wrong. Bobo is getting tired */
  {
    imageURL: "frames/frame-3-4.jpg",
    dialogue:
      "It looks like you didn't help Bobo. They're getting tired from this tough training!",
    type: "wrong",
  },
  /* You got it right. Bobo succesfully finished their training arc */
  {
    imageURL: "frames/frame-3-5.jpg",
    dialogue:
      "Good job! Bobo has finished up their mini training arc and is ready to win this race.",
    type: "right",
  },
  /* Start the race */
  {
    imageURL: "frames/frame-3-6.jpg",
    dialogue:
      "After the training arc, Bobo and the other racers get ready at their starting positions. Bobo will be the team's anchor. Help begin the race, in present polite (～ます) form!",
    hiragana_answer: "はじまります",
    kanji_answer: "始まります",
    prompt: "レースが",
    type: "question",
  },
  /* You got it wrong. Bobo doesn't think that's quite right */
  {
    imageURL: "frames/frame-1-3.jpg",
    dialogue: "Bobo doesn't think that's quite right. Please try again.",
    type: "wrong",
  },
  /* You got it right. The race has started */
  {
    imageURL: "frames/frame-3-8.jpg",
    dialogue: "Awesome! You got it right. The race has begun.",
    type: "right",
  },
  /* Get Bobo to move faster */
  {
    imageURL: "frames/frame-3-9.jpg",
    dialogue:
      "After a few minutes, it's Bobo's turn to run. However, Bobo is just behind second place. Help them move faster in present polite (～ます) form to win.",
    hiragana_answer: "うごきます",
    kanji_answer: "動きます",
    prompt: "ぼぼが早く",
    type: "question",
  },
  /* You got it wrong. Bobo struggles to catch up */
  {
    imageURL: "frames/frame-3-10.jpg",
    dialogue: "Bobo struggles to catch up. They're still moving too slow!",
    type: "wrong",
  },
  /* You got it right. Bobo speeds up like the Flash and wins */
  {
    imageURL: "frames/frame-3-11.jpg",
    dialogue:
      "Wow! Bobo flies through the rest of the race and manages to secure a victory!",
    type: "right",
  },
  /* Bobo is tired. Gather their friends to help them celebrate */
  {
    imageURL: "frames/frame-3-12.jpg",
    dialogue:
      "Bobo is exhausted after the race. Gather Bobo's friends in present polite (～ます) form to help them celebrate!",
    hiragana_answer: "あつめます",
    kanji_answer: "集めます",
    prompt: "友達を",
    type: "question",
  },
  /* You got it wrong. Bobo is about to collapse from exhaustion */
  {
    imageURL: "frames/frame-3-13.jpg",
    dialogue:
      "You didn't gather Bobo's friends. Bobo is about to fall asleep from exhaustion.",
    type: "wrong",
  },
  /* You got it right. Bobo's friends gather to help them celebrate */
  {
    imageURL: "frames/frame-2-5.jpg",
    dialogue:
      "Congratulations! You successfully gathered Bobo's friends to help them celebrate a well-deserved victory. Bobo can't wait to see what their next adventure holds.",
    type: "right",
  },
];
