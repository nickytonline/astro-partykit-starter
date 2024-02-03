import { test } from "@playwright/test";

test("join room with username and room number", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.getByPlaceholder("username").click();
  await page.getByPlaceholder("username").fill("test-user");
  await page.getByPlaceholder("Room ID").click();
  await page.getByPlaceholder("Room ID").fill("test-rm");
  await page.getByRole("button", { name: "Join Room" }).click();
  await page.getByRole("heading", { name: "test-rm Room" }).click();
});

test("join room as anonymous user and default room", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.getByPlaceholder("username").click();
  await page.getByPlaceholder("Room ID").click();
  await page.getByRole("button", { name: "Join Room" }).click();
  await page.getByRole("heading", { name: "astro-partykit-room Room" }).click();
});
