import type { Meta, StoryObj } from "@storybook/react";
import { Party } from "./Party";

const meta: Meta<typeof Party> = {
  title: "Components/Party",
  component: Party,
};

export default meta;

type StoryProps = {
  roomId: string;
  username: string;
};

export const ChatRoom: StoryObj<StoryProps> = {
  args: {
    roomId: "456",
    username: "JaneDoe",
  },
};
