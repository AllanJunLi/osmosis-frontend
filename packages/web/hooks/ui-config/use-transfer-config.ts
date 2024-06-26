import { makeLocalStorageKVStore } from "@osmosis-labs/stores";
import { useState } from "react";

import { useWindowSize } from "~/hooks";
import { useStore } from "~/stores";
import { ObservableTransferUIConfig } from "~/stores/assets";

export function useTransferConfig() {
  const { isMobile } = useWindowSize();
  const { assetsStore } = useStore();

  const [transferConfig] = useState<ObservableTransferUIConfig>(
    () =>
      new ObservableTransferUIConfig(
        assetsStore,
        makeLocalStorageKVStore("transfer-ui-config")
      )
  );
  transferConfig.setIsMobile(isMobile);

  return transferConfig;
}
