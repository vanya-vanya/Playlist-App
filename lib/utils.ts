import { type Page } from "@playwright/test";

export async function goto(page: Page) {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");
}

export async function totalDuration(page: Page) {
  let durationList: number[] = [];

  for (let i = 0; i < 3; i++) {
    await page.getByRole("button").nth(i).click();
  }

  const playlistCount = page.locator(`//*[@id="playlist"]/div/div`);

  for (let i = 1; i <= (await playlistCount.count()); i++) {
    const track = page
      .locator(`//*[@id="playlist"]/div/div[${i}]/div[3]`)
      .innerText();
    const a = (await track).split(":");
    const seconds = +a[0] * 60 + +a[1];
    durationList.push(seconds);
  }

  const total = durationList.reduce((a, b) => a + b, 0);

  return total;
}
