import { test, expect } from "@playwright/test";
import { PlaylistTest } from "../pages/playlist";
import { goto, totalDuration } from "../lib/utils";

test.describe("Playlist", () => {
  test.beforeEach(async ({ page }) => {
    await goto(page);
  });

  test("Search track", async ({ page }) => {
    const playlistTest = new PlaylistTest(page);
    await playlistTest.searchItem("Summer Breeze");
    await expect(playlistTest.summerBreeze).toBeVisible();
    await expect(playlistTest.tracklistCount).toHaveCount(1);
  });

  test("Add track", async ({ page }) => {
    const playlistTest = new PlaylistTest(page);
    await playlistTest.addItem();
    await expect(playlistTest.playlist).toBeVisible();
    await expect(playlistTest.playlistSummerBreeze).toBeVisible();
    await expect(playlistTest.playlistCount).toHaveCount(1);
  });

  test("Total duration of the playlist in seconds", async ({ page }) => {
    const playlistTest = new PlaylistTest(page);
    const result = await totalDuration(page);
    expect(parseInt(await playlistTest.playlistDuration.innerText(), 10)).toEqual(
        result
      );
  });

  test.afterEach(async ({ page }) => {
    await expect(page).toHaveURL("https://vite-react-alpha-lemon.vercel.app/");
  });
});
