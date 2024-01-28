import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;

type StoryProps = {
  roomId: string;
  username: string;
};

export const ShowModal: StoryObj<StoryProps> = {
  args: {
    roomId: "456",
    username: "JaneDoe",
  },
};
