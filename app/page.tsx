"use client";

import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Badge,
  Center,
  Container,
  Modal,
  Stack,
  TextInput,
  Title,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";

const PLAYER_NAME_KEY = "playerName";
const COMPLETED_STORIES_KEY = "completedStories";

const stories = [
  { frame: 0, title: "Bobo's Day at School", image: "frames/frame-1-5.jpg" },
  {
    frame: 15,
    title: "Bobo Plays a Video Game",
    image: "frames/frame-2-3.jpg",
  },
  {
    frame: 30,
    title: "Bobo Does a Relay Race",
    image: "frames/frame-3-10.jpg",
  },
];

export default function HomePage() {
  const [playerName, setPlayerName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [completedStories, setCompletedStories] = useState<number[]>([]);

  useEffect(() => {
    const savedName = window.localStorage.getItem(PLAYER_NAME_KEY);
    if (savedName) {
      setPlayerName(savedName);
    } else {
      setNameModalOpen(true);
    }

    const rawCompleted = window.localStorage.getItem(COMPLETED_STORIES_KEY);
    if (rawCompleted) {
      try {
        setCompletedStories(JSON.parse(rawCompleted));
      } catch {
        setCompletedStories([]);
      }
    }
  }, []);

  const saveName = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    window.localStorage.setItem(PLAYER_NAME_KEY, trimmed);
    setPlayerName(trimmed);
    setNameModalOpen(false);
  };

  return (
    <>
      <Modal
        opened={nameModalOpen}
        onClose={() => {}}
        withCloseButton={false}
        closeOnClickOutside={false}
        closeOnEscape={false}
        title="Welcome!"
      >
        <Stack>
          <Text>{"What's your name?"}</Text>
          <TextInput
            placeholder="Enter your name"
            value={nameDraft}
            onChange={(e) => setNameDraft(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveName(nameDraft);
            }}
            data-autofocus
          />
          <Button
            onClick={() => saveName(nameDraft)}
            disabled={!nameDraft.trim()}
          >
            Save
          </Button>
        </Stack>
      </Modal>

      <Center>
        <Container size="lg">
          {playerName && (
            <Text ta="center" size="lg" mb="md">
              Welcome back, {playerName}!
            </Text>
          )}
          {stories.map((story) => {
            const isComplete = completedStories.includes(story.frame);
            return (
              <Link
                key={story.frame}
                href={{ pathname: "/story", query: { frame: story.frame } }}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Card shadow="sm" padding="xl" mb="md">
                  <Card.Section style={{ position: "relative" }}>
                    <Image src={story.image} h={160} alt={story.title} />
                    {isComplete && (
                      <Badge
                        color="green"
                        size="lg"
                        style={{ position: "absolute", top: 10, right: 10 }}
                      >
                        ✓
                      </Badge>
                    )}
                  </Card.Section>

                  <Group justify="space-between" mt="md">
                    <Text fw={500} size="lg">
                      {story.title}
                    </Text>
                  </Group>
                </Card>
              </Link>
            );
          })}
        </Container>
      </Center>

      {/* How to Play */}
      <Center>
        <Stack maw={600} gap="xs" p="md">
          <Title order={3} ta="center">
            How to Play
          </Title>
          <Text>
            Help Bobo get through various situations by conjugating intransitive
            and transitive verbs. <b>Click</b> on one of the stories to start.
          </Text>
          <Text>
            During the stories, you will <b>type</b> the conjugation into the
            textbox in either hiragana or kanji and <b>click</b> the{" "}
            <b>Submit</b> button.
          </Text>
          <Text>
            If you conjugate the verb correctly you will see a screen displaying
            a positive outcome. After three failed attempts, you will receive
            the answer.{" "}
            <i>
              You can only progress through the story by typing in the correct
              conjugation.
            </i>
          </Text>
          <Text>
            <b>Clicking</b> the <b>Home</b> button will bring you back to all of
            the stories, but you will have to redo the story you were working
            on.
          </Text>
          <Text>
            Finally, once you complete a story, you will see a checkmark appear
            on the corresponding story on the home page. がんばって！
          </Text>
        </Stack>
      </Center>

      {/* Credits */}
      <Center>
        <Stack maw={600} gap="xs" p="md">
          <Title order={3} ta="center">
            Credits
          </Title>
          <Text>
            <b>Project Director & Japanese Language Content</b>: Atsuko Suga
            Borgmann
          </Text>
          <Text>
            <b>Game Design & Programming</b>: Angel Arrazola and Ross Williams
          </Text>
          <Text>
            <i>
              This project was developed at Brown University with support from
              the UTRA.
            </i>
          </Text>
          <Text>
            <i>
              Art for "Bobo" sourced from AC Illustration author{" "}
              <a
                href="https://www.ac-illust.com/main/profile.php?id=aGKSuoSZ&area=1"
                target="_blank"
              >
                ちょこぴよ
              </a>
            </i>
          </Text>
        </Stack>
      </Center>
    </>
  );
}
