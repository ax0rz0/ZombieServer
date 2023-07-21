import { create } from "zustand";
import axios from "axios";
import { emptyBucketData, emptyBucketDataResponse } from "./defaults";

export const useDataStore = create<DataStore>()((set) => ({
  data: emptyBucketData,
  fetchData: async (local?: boolean) => {
    const { data } = await axios
      .get<BucketDataResponse>(
        local ? "/data.json" : "https://bucket.retrac.site/data.json"
      )
      .catch(() => emptyBucketDataResponse);

    set({ data });
    useBannerStore.getState().fetchBanner();
  },
}));

export const useBannerStore = create<BannerStore>()((set, get) => ({
  banner: [],
  version: JSON.parse(localStorage.getItem("bannerVersion") || "0"),
  enabled: JSON.parse(localStorage.getItem("bannerEnabled") || "true"),
  setBanner: (banner) => set({ banner }),
  setEnabled: (enabled) => set({ enabled }),
  fetchBanner: async () => {
    const myBanner = get();
    const { data } = useDataStore.getState();

    const myBannerIsOutdated = data.bannerVersion >= myBanner.version;
    const myBannerIsSame = data.bannerVersion === myBanner.version;

    localStorage.setItem(
      "bannerVersion",
      JSON.stringify(myBannerIsOutdated ? data.bannerVersion : myBanner.version)
    );

    localStorage.setItem(
      "bannerEnabled",
      JSON.stringify(
        data.bannerForced ? true : myBannerIsSame ? myBanner.enabled : true
      )
    );

    set({
      banner: data.banner,
      version: data.bannerVersion,
      enabled: data.bannerForced
        ? true
        : myBannerIsSame
        ? myBanner.enabled
        : true,
    });
  },
}));
