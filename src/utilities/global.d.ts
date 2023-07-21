interface BannerItemText {
  type: "text";
  text: string;
}

interface BannerItemLink {
  type: "link";
  to: string;
  text: string;
}

type BannerItem = BannerItemText | BannerItemLink;

interface BucketDataResponse {
  banner: BannerItem[];
  bannerForced: boolean;
  bannerVersion: number;
}

interface DataStore {
  data: BucketDataResponse;
  fetchData: (local?: boolean) => void;
}

interface BannerStore {
  banner: BannerItem[];
  version: number;
  enabled: boolean;
  setBanner: (banner: BannerItem[]) => void;
  setEnabled: (enabled: boolean) => void;
  fetchBanner: (uri?: string) => void;
}
