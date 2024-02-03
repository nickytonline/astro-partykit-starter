import { test } from "@playwright/test";

test("user leaving a room", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.getByPlaceholder("username").click();
  await page.getByPlaceholder("username").fill("test-user");
  await page.getByPlaceholder("Room ID").click();
  await page.getByPlaceholder("Room ID").fill("test");
  await page.getByRole("button", { name: "Join Room" }).click();
  await page.getByRole("button", { name: "Leave Room" }).click();
});
