import { type Locator, type Page } from "@playwright/test";

export class PlaylistTest {
  readonly search: Locator;
  readonly summerBreeze: Locator;
  readonly tracklistCount: Locator;
  readonly summerBreezeAddBtn: Locator;
  readonly playlist: Locator;
  readonly playlistSummerBreeze: Locator;
  readonly playlistCount: Locator;
  readonly playlistDuration: Locator;

  constructor(page: Page) {
    this.search = page.locator("label", { hasText: "Search" });
    this.summerBreeze = page.getByText("Summer Breeze03:35+");
    this.tracklistCount = page.locator(`//*[@id="tracklist"]/div/div`);
    this.summerBreezeAddBtn = page.getByRole("button").nth(0);
    this.playlist = page.getByText("Your playlist");
    this.playlistSummerBreeze = page.getByText("Summer Breeze03:35-");
    this.playlistCount = page.locator(`//*[@id="playlist"]/div/div`);
    this.playlistDuration = page.locator("id=playlist-duration");
  }

  async searchItem(item: string) {
    await this.search.clear();
    await this.search.fill(item);
  }

  async addItem() {
    await this.summerBreezeAddBtn.click();
  }
}
