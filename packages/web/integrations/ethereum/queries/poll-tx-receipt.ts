import { poll } from "@osmosis-labs/utils";
import { hexToNumberString } from "web3-utils";

import { SendFn } from "~/integrations/ethereum/types";

type ReceiptStatus = "confirmed" | "failed";

export function pollTransactionReceipt(
  sendFn: SendFn,
  txHash: string,
  onReceiveStatus: (newStatus: ReceiptStatus) => void,
  pollInterval = 4_000
) {
  poll({
    fn: () => sendFn({ method: "eth_getTransactionReceipt", params: [txHash] }),
    validate: (data: unknown) => data !== null,
    interval: pollInterval,
  }).then((result: any) => {
    if (result?.status) {
      if (hexToNumberString(result?.status) === "1") {
        onReceiveStatus("confirmed");
      } else if (hexToNumberString(result?.status) === "0") {
        onReceiveStatus("failed");
      }
    }
  });
}
