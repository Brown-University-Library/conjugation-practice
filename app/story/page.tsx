"use client";

import { Center, Space, Image, Text, Grid, Stack, Container, TextInput, Group, Button, rem } from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import { Frame, frameList } from "../components/Frame";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const COMPLETED_STORIES_KEY = "completedStories";

function StoryStuff() {
  const searchParams = useSearchParams();
  const initialFrame = parseInt(searchParams.get("frame") ?? "0");
  const [frame, setFrame] = useState(initialFrame);
  const [inputValue, setInputValue] = useState("");
  const [isResultScreen, setIsResultScreen] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptsLeft, setAttempts] = useState(3);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mark this story as complete once the player reaches its final frame
  useEffect(() => {
    if (frame % 15 === 14) {
      const storyId = frame - 14;
      const raw = window.localStorage.getItem(COMPLETED_STORIES_KEY);
      let completed: number[] = [];
      if (raw) {
        try {
          completed = JSON.parse(raw);
        } catch {
          completed = [];
        }
      }
      if (!completed.includes(storyId)) {
        completed.push(storyId);
        window.localStorage.setItem(COMPLETED_STORIES_KEY, JSON.stringify(completed));
      }
    }
  }, [frame]);

  const handleClick = () => {
    if (isResultScreen) {
      setIsResultScreen(false);
      if (frameList[frame].type == "wrong") {
        setFrame(frame - 1);
      } else {
        setFrame(frame + 1);
      }
      return;
    }

    if (inputValue == frameList[frame].hiragana_answer || inputValue == frameList[frame].kanji_answer) {
      setFrame(frame + 2);
      setScore(score + calculateScore());
      setAttempts(3);
    } else {
      setFrame(frame + 1);
      setAttempts(Math.max(attemptsLeft - 1, 0));
    }

    setIsResultScreen(true);
    setInputValue("");
  };

  const displayButtonText = () => {
    switch (frameList[frame].type) {
      case "wrong":
        return "Try Again";
      case "right":
        return "Next";
      case "question":
        return "Submit";
    }
  };

  function attemptText(): string {
    if (frame % 3 != 1) return "";
    let answer = frameList[frame - 1].prompt! + frameList[frame - 1].hiragana_answer!;
    switch (attemptsLeft) {
      case 0:
        return (
          "Oh no! You ran out of tries, but luckily Bobo found the right answer: \n" + answer + "！ がんばってね！"
        );
      case 1:
        return "You have 1 try left!";
      default:
        return "You have " + attemptsLeft + " tries left!";
    }
  }

  function calculateScore(): number {
    switch (attemptsLeft) {
      case 3:
        return 1000;
      case 2:
        return 500;
      case 1:
        return 100;
      default:
        return 0;
    }
  }

  return (
    <Container size="sm" style={{ textAlign: "center" }}>
      <Link href={{ pathname: "/" }} style={{ textDecoration: "none" }}>
        <Button>Home</Button>
      </Link>
      <Text size="xl" ta="right">
        Score: {score}
      </Text>
      <Stack align="center">
        <Image fit="contain" alt="character" src={isClient ? frameList[frame].imageURL : "./"}></Image>
        <Text size="xl">{isClient ? frameList[frame].dialogue + " " + attemptText() : "ローディング中"}</Text>
        <Group>
          <Text size="xl" display={isResultScreen ? "none" : ""}>
            {frameList[frame].prompt}
          </Text>
          <TextInput
            value={isClient ? inputValue : "ローディング中"}
            onChange={(event) => setInputValue(event.currentTarget.value)}
            display={isResultScreen ? "none" : ""}
          />
          <Button onClick={handleClick} display={frame % 15 === 14 ? "none" : ""}>
            {displayButtonText()}
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}

export default function Story() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoryStuff />
    </Suspense>
  );
}
