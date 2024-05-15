import { fetchPortfolio } from "~/service/axios";
export const usePortfolioStore = defineStore({
  id: "portfolio",
  state: () => ({
    portfolio: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPortfolio() {
      this.loading = true;
      try {
        this.portfolio = await fetchPortfolio();
      } catch (error) {
        this.error;
      } finally {
        this.loading = false;
      }
    },
  },
});
