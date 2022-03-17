import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to LWC!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:cog",
      },
      {
        label: "Live compilation displayed with code changes.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }
}
